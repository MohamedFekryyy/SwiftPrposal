
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tsptyfgxkrfiujltwwtg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzcHR5Zmd4a3JmaXVqbHR3d3RnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE2MDI4MjAsImV4cCI6MjAwNzE3ODgyMH0.A57TgbZxHYrYzNbAP228Y0M0bzO7_rlEbXfuA-bh6cU';

const supabase = createClient(supabaseUrl, supabaseKey);

document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const { user, error } = await supabase.auth.signIn({ email, password });
  
    if (error) {
      document.getElementById('login-error').textContent = error.message;
    } else {
      console.log('User logged in:', user);
      // Redirect or update UI
    }
  });