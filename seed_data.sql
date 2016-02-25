DROP TABLE IF EXISTS buildings;
DROP TABLE IF EXISTS units;
DROP TABLE IF EXISTS tenants;
DROP TABLE IF EXISTS tenants_units;

CREATE TABLE buildings (
    id serial PRIMARY KEY,
    name text
);

CREATE TABLE units (
    id serial PRIMARY KEY,
    building_id integer references buildings(id),
    unit_number integer
);

CREATE TABLE tenants (
    id serial PRIMARY KEY,
    name text
);

CREATE TABLE tenants_units (
    tenant_id integer references tenants(id),
    unit_id integer references units(id)
);

INSERT INTO buildings (name) VALUES
    ('Mourning Star'),
    ('The Columbine'),
    ('Asbury Plaza'),
    ('Newport Manor'),
    ('Ghost Haus');

INSERT INTO units (building_id, unit_number) VALUES
    ((SELECT id FROM buildings WHERE name = 'Mourning Star'), 100),
    ((SELECT id FROM buildings WHERE name = 'Mourning Star'), 200),
    ((SELECT id FROM buildings WHERE name = 'Mourning Star'), 300),
    ((SELECT id FROM buildings WHERE name = 'The Columbine'), 100),
    ((SELECT id FROM buildings WHERE name = 'The Columbine'), 200),
    ((SELECT id FROM buildings WHERE name = 'The Columbine'), 300),
    ((SELECT id FROM buildings WHERE name = 'Asbury Plaza'), 100),
    ((SELECT id FROM buildings WHERE name = 'Asbury Plaza'), 200),
    ((SELECT id FROM buildings WHERE name = 'Asbury Plaza'), 300),
    ((SELECT id FROM buildings WHERE name = 'Newport Manor'), 100),
    ((SELECT id FROM buildings WHERE name = 'Newport Manor'), 200),
    ((SELECT id FROM buildings WHERE name = 'Newport Manor'), 300),
    ((SELECT id FROM buildings WHERE name = 'Ghost Haus'), 100),
    ((SELECT id FROM buildings WHERE name = 'Ghost Haus'), 200),
    ((SELECT id FROM buildings WHERE name = 'Ghost Haus'), 300);

INSERT INTO tenants (name) VALUES
    ('Alice Longbottom'),
    ('Narcissa Malfoy'),
    ('Lily Potter'),
    ('Molly Weasley'),
    ('Vincent Crabbe, Sr.'),
    ('Amos Diggory'),
    ('Vernon Dursley'),
    ('Goyle Sr'),
    ('Frank Longbottom'),
    ('Xenophilius Lovegood'),
    ('Lucius Malfoy'),
    ('James Potter'),
    ('Arthur Weasley'),
    ('Hubert Flatley'),
    ('Myrtis Dibbert');



INSERT INTO tenants_units (tenant_id, unit_id) VALUES
    ((SELECT id FROM tenants WHERE name = 'Alice Longbottom'), (SELECT id FROM units WHERE building_id = 1 AND unit_number = 100)),
    ((SELECT id FROM tenants WHERE name = 'Narcissa Malfoy'), (SELECT id FROM units WHERE building_id = 1 AND unit_number = 200)),
    ((SELECT id FROM tenants WHERE name = 'Lily Potter'), (SELECT id FROM units WHERE building_id = 1 AND unit_number = 300)),
    ((SELECT id FROM tenants WHERE name = 'Molly Weasley'), (SELECT id FROM units WHERE building_id = 2 AND unit_number = 100)),
    ((SELECT id FROM tenants WHERE name = 'Vincent Crabbe, Sr.'), (SELECT id FROM units WHERE building_id = 2 AND unit_number = 200)),
    ((SELECT id FROM tenants WHERE name = 'Amos Diggory'), (SELECT id FROM units WHERE building_id = 2 AND unit_number = 300)),
    ((SELECT id FROM tenants WHERE name = 'Vernon Dursley'), (SELECT id FROM units WHERE building_id = 3 AND unit_number = 100)),
    ((SELECT id FROM tenants WHERE name = 'Gregory Goyle Sr'), (SELECT id FROM units WHERE building_id = 3 AND unit_number = 200)),
    ((SELECT id FROM tenants WHERE name = 'Frank Longbottom'), (SELECT id FROM units WHERE building_id = 3 AND unit_number = 300)),
    ((SELECT id FROM tenants WHERE name = 'Xenophilius Lovegood'), (SELECT id FROM units WHERE building_id = 4 AND unit_number = 100)),
    ((SELECT id FROM tenants WHERE name = 'Lucius Malfoy'), (SELECT id FROM units WHERE building_id = 4 AND unit_number = 200)),
    ((SELECT id FROM tenants WHERE name = 'James Potter'), (SELECT id FROM units WHERE building_id = 4 AND unit_number = 300)),
    ((SELECT id FROM tenants WHERE name = 'Arthur Weasley'), (SELECT id FROM units WHERE building_id = 5 AND unit_number = 100)),
    ((SELECT id FROM tenants WHERE name = 'Hubert Flatley'), (SELECT id FROM units WHERE building_id = 5 AND unit_number = 200)),
    ((SELECT id FROM tenants WHERE name = 'Myrtis Dibbert'), (SELECT id FROM units WHERE building_id = 5 AND unit_number = 300));

    -- ('Bailee Bins'),
    -- ('Odell Ondricka'),
    -- ('Gonzalo Schaefer'),
    -- ('Laverna Johns'),
    -- ('Mazie Kub'),
    -- ('Sid OKon'),
    -- ('Ernestine Green'),
    -- ('Markus Toy'),
    -- ('Laurence Thiel'),
    -- ('Benton Reilly'),
    -- ('Marshall Veum'),
    -- ('Leonie Hickle'),
    -- ('Blanche Morissette'),
    -- ('Tyree Kozey'),
    -- ('Vada Bruen'),
    -- ('Ara Roob'),
    -- ('Delpha Kirlin'),
    -- ('Taryn Hansen'),
    -- ('Lenore Bernhard'),
    -- ('Jordane Lynch'),
    -- ('Nicole Rolfson'),
    -- ('Jarrett McClure'),
    -- ('Aurore Kohler'),
    -- ('Antonietta Conroy'),
    -- ('Mason Christiansen'),
    -- ('Felipa Reilly'),
    -- ('Jules Pacocha'),
    -- ('Leta Bogan'),
    -- ('Kristy Ullrich'),
    -- ('Viviane Balistreri'),
    -- ('Greyson Jacobs'),
    -- ('Marge Baumbach'),
    -- ('Rozella Hoppe'),
    -- ('Crawford Collier'),
    -- ('Anna Kassulke'),
    -- ('Burnice Keefe'),
    -- ('Anabelle Rutherford'),
    -- ('Elwin Daugherty'),
    -- ('Felicita Fisher'),
    -- ('Etha Swift'),
    -- ('Corrine Doyle'),
    -- ('Jason Satterfield'),
    -- ('Heber Monahan'),
    -- ('Hallie Kassulke'),
    -- ('Maurine Stoltenberg'),
    -- ('Marlon Lind'),
    -- ('Ahmad Macejkovic'),
    -- ('Esmeralda Berge'),
    -- ('Yvette Okuneva'),
    -- ('Shayne Green'),
    -- ('Russell Ritchie'),
    -- ('Julio Walker'),
    -- ('Carlee Klein'),
    -- ('Zoe Lueilwitz'),
    -- ('Ward Braun'),
    -- ('Maude Blanda'),
    -- ('Gladys Stiedemann'),
    -- ('Cecile Schmidt'),
    -- ('Shaun Gutkowski'),
    -- ('Isadore Muller'),
    -- ('Jamey Padberg'),
    -- ('Trent Yundt'),
    -- ('Tessie Sporer'),
    -- ('Clementine Marks'),
    -- ('Esmeralda Monahan'),
    -- ('Eugene Brekke'),
    -- ('Ayla Gutmann'),
    -- ('Carmel Kerluke'),
    -- ('Rey Schiller'),
    -- ('Jannie Stokes'),
    -- ('Adrain Koss'),
    -- ('Randy Kuhlman'),
    -- ('Herminia Fadel'),
    -- ('Kayleigh Kilback'),
    -- ('Geovanny McGlynn'),
    -- ('Vivien Bauch'),
    -- ('Martine Oberbrunner');




-- function generate () {
-- ( var result = []);
--     for (var i = 0; i < 80; i++) {
--         result.push(getName());
--     }
--     return result;
-- }