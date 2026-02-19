import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uugknwahatyerldgimxy.supabase.co'
const supabaseKey = 'sb_publishable_B-Ppz5Ybrmo7ApA1-Se3Dw_ZrMJRejr'

export const supabase = createClient(supabaseUrl, supabaseKey)
