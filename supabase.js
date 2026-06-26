const SUPABASE_URL = "https://gjotmpvjtsaixsbdbgcr.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdqb3RtcHZqdHNhaXhzYmRiZ2NyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzODg5ODMsImV4cCI6MjA5Nzk2NDk4M30.KntE-OW-9Q7lN10MmY6A7KutQrtgDI3LeNs1N86Ndp4";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);