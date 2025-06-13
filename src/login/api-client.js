import { createClient } from '@supabase/supabase-js';

export const supabase = createClient("https://qimfteqvztkmwztdmjez.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpbWZ0ZXF2enRrbXd6dGRtamV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NTA5NjIsImV4cCI6MjA2MzIyNjk2Mn0.KGgTLLlFBlCEwMbO4eLOG7t6FUg1nEowEdsm-yIN-mc");