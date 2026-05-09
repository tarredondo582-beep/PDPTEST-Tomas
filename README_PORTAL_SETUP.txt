Pueblo de Palmas Phase 1 Borrower Portal

Included pages:
- index.html
- contact.html
- how-it-works.html
- 404.html
- forms.html
- customer_portal.html
- assets folder
- supabase_setup.sql
- borrower_import_template.csv

What changed:
1. Added Forms page.
2. Added Customer Portal page.
3. Added nav links to Forms and Customer Portal.
4. Replaced floating WhatsApp button with Facebook, Instagram, and YouTube buttons.
5. Replaced mobile WhatsApp button with Forms.
6. Portal uses free Supabase email magic-link login and stores requests as Pending Review.

Supabase setup:
1. Create a free Supabase project.
2. Open SQL Editor and run supabase_setup.sql.
3. Add authorized borrower emails to authorized_borrowers. You can import borrower_import_template.csv.
4. In customer_portal.html, replace:
   https://YOUR-PROJECT.supabase.co
   YOUR-SUPABASE-ANON-KEY
   with your actual Supabase project URL and anon public key.
5. In Supabase Auth settings, enable email login / magic link.
6. Add your website domain to allowed redirect URLs.

Security/operations note:
This is a request portal, not an automatic account-change portal. Staff should manually review all submissions before updating Salesforce/Fundingo or servicing records. Do not ask customers to upload IDs through this static site.
