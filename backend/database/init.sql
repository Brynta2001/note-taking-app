-- Create the categories table
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create the notes table
CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    archived BOOLEAN DEFAULT FALSE,
    category_id INT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE SET NULL
);

-- Insert sample categories
INSERT INTO
    categories (name, created_at, updated_at)
VALUES ('Work', NOW(), NOW()),
    ('Personal', NOW(), NOW()),
    ('Study', NOW(), NOW());

-- Insert example rows
INSERT INTO
    notes (
        title,
        description,
        archived,
        category_id,
        created_at,
        updated_at
    )
VALUES (
        'First Note',
        'This is the first note.',
        false,
        1,
        NOW(),
        NOW()
    ),
    (
        'Second Note',
        'This is the second note, and it is archived.',
        true,
        NULL,
        NOW(),
        NOW()
    );