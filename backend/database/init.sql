-- Create the notes table
CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    archived BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert example rows
INSERT INTO notes (title, description, archived, created_at, updated_at)
VALUES
    ('First Note', 'This is the first note.', false, NOW(), NOW()),
    ('Second Note', 'This is the second note, and it is archived.', true, NOW(), NOW());
