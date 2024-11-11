import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { env } from 'process';

@Injectable()
export class SupabaseService {
  public client: SupabaseClient;
  constructor() {
    const supabaseUrl = env.SUPABASE_URL;
    const supabaseKey = env.SUPABASE_ANON_KEY;
    this.client = createClient(supabaseUrl, supabaseKey);
  }
}
