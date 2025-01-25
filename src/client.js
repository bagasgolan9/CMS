import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tekpyodsicexhzqaofmw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRla3B5b2RzaWNleGh6cWFvZm13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxMjIxMDQsImV4cCI6MjA1MjY5ODEwNH0.ieOjqq3yznwb40BjauQMjNpetbiESjHoOiYhB1jB6Q4'
export const supabase = createClient(supabaseUrl, supabaseKey)
