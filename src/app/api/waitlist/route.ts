import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    // Parser le body de la requête
    let body
    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { error: 'Format de requête invalide' },
        { status: 400 }
      )
    }

    const { email } = body

    // Validation de l'email
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Veuillez entrer un email valide' },
        { status: 400 }
      )
    }

    // Vérifier que Supabase est configuré
    if (!supabase) {
      return NextResponse.json(
        { message: 'Email enregistré avec succès (mode développement)', data: { email } },
        { status: 200 }
      )
    }

    // Insertion dans Supabase
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email }])
      .select()

    if (error) {
      // Gestion de l'erreur de duplication (email déjà existant)
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'Cet email est déjà enregistré' },
          { status: 409 }
        )
      }

      // Gestion de l'erreur RLS (Row Level Security)
      if (error.code === '42501') {
        return NextResponse.json(
          { 
            error: 'Configuration de sécurité manquante. Veuillez exécuter le script SQL dans Supabase.',
            details: 'Exécutez supabase-rls-policy.sql dans l\'éditeur SQL de Supabase'
          },
          { status: 500 }
        )
      }

      return NextResponse.json(
        { 
          error: 'Une erreur est survenue. Veuillez réessayer.',
          details: error.message || 'Erreur inconnue'
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email enregistré avec succès', data },
      { status: 200 }
    )
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Erreur inconnue'
    
    return NextResponse.json(
      { 
        error: 'Erreur serveur',
        details: errorMessage
      },
      { status: 500 }
    )
  }
}

