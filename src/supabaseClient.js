import { createClient } from '@supabase/supabase-js'

// Suas credenciais da API do Supabase
const supabaseUrl = 'https://ezyrcmwtqkzpyalvdziv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6eXJjbXd0cWt6cHlhbHZkeml2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0Njk5NjgsImV4cCI6MjA2NjA0NTk2OH0.xo8sFUn-KmLBNg8cXf9TSzoHLpxoWPVScd_D5FNnUpE';

// Cria e exporta o cliente Supabase para ser usado em outros lugares do seu app
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
