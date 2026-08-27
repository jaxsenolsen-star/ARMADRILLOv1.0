/*
# Add planet column to leaderboard

1. Changes
- Add `planet` (text, nullable) to the `leaderboard` table.
  Stores which planet the run took place on: "earth", "moon", or "mars".
  Existing rows will have NULL — treated as "earth" by the frontend.

2. Security
- No RLS policy changes. Existing anon/authenticated CRUD policies remain in place.
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leaderboard' AND column_name = 'planet'
  ) THEN
    ALTER TABLE leaderboard ADD COLUMN planet text;
  END IF;
END $$;
