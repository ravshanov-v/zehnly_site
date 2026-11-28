import { createClient } from '@supabase/supabase-js'

const supabaseUrl = String(import.meta.env.VITE_SUPABASE_URL ?? '').trim()
const supabaseAnonKey = String(import.meta.env.VITE_SUPABASE_ANON_KEY ?? '').trim()

function createSupabaseClient() {
  if (!supabaseUrl || !supabaseAnonKey) return null

  try {
    return createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    })
  } catch (error) {
    console.warn('Supabase client could not be initialized, using guest mode:', error)
    return null
  }
}

export const supabase = createSupabaseClient()

export const isSupabaseEnabled = supabase !== null
