DROP TABLE IF EXISTS favorite;
DROP TABLE IF EXISTS item;
DROP TABLE IF EXISTS section;
DROP TABLE IF EXISTS location;
DROP TABLE IF EXISTS business;
-- DROP TABLE IF EXISTS profile;


CREATE TABLE IF NOT EXISTS profile(
    profile_id uuid primary key,
    profile_name varchar(100),
    profile_email varchar(255) unique,
    profile_hash char(97),
    profile_is_owner bool,
    profile_activation_token char(32),
    profile_datetime timestamptz
);

CREATE TABLE IF NOT EXISTS business(
    business_id uuid primary key,
    business_profile_id uuid references profile(profile_id) ON DELETE CASCADE,
    business_name varchar(100),
    business_photo varchar(255),
    business_hours varchar(255),
    business_bio varchar(800),
    business_email varchar(255) unique,
    business_phone varchar(10)
);

CREATE TABLE IF NOT EXISTS location(
    location_id uuid primary key,
    location_business_id uuid references business(business_id) ON DELETE CASCADE,
    location_of_business varchar(255),
    location_active bool,
    location_start_datetime timestamptz,
    location_end_datetime timestamptz
);

CREATE TABLE IF NOT EXISTS section(
    section_id uuid primary key,
    section_business_id uuid references business(business_id) ON DELETE CASCADE,
    section_name varchar(100),
    section_description varchar(255),
    section_order smallint
);

CREATE TABLE IF NOT EXISTS item(
    item_id uuid primary key,
    item_section_id uuid references section(section_id) ON DELETE CASCADE,
    item_description varchar(255),
    item_photo varchar(255),
    item_price money,
    item_order smallint
);

CREATE TABLE IF NOT EXISTS favorite(
    favorite_profile_id uuid references profile(profile_id),
    favorite_business_id uuid references business(business_id) ON DELETE CASCADE,
    favorite_datetime timestamptz
);

CREATE INDEX ON favorite(favorite_profile_id);
CREATE INDEX ON favorite(favorite_business_id);
CREATE INDEX ON item(item_section_id);
CREATE INDEX ON section(section_business_id);
CREATE INDEX ON location(location_business_id);
CREATE INDEX ON business(business_profile_id);