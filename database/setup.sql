CREATE SCHEMA ProofOfConcept;

USE ProofOfConcept;

CREATE TABLE SampleTable (
    ID INT PRIMARY KEY,
    Entry VARCHAR(255)
);

-- Insert Data
INSERT INTO SampleTable (ID, Entry) VALUES (1, 'Proof of concept');
