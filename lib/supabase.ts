import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Lead capture helper — call this when a visitor submits a contact form or books a call
export async function captureLeadEvent(payload: {
  event: 'booking_click' | 'whatsapp_click' | 'page_view';
  lang: string;
  source?: string;
}) {
  if (!supabaseUrl || !supabaseAnonKey) return;
  await supabase.from('lead_events').insert(payload).select();
}
