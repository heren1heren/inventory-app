--
-- PostgreSQL database dump
--

-- Dumped from database version 14.15 (Ubuntu 14.15-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.15 (Ubuntu 14.15-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: pokemons; Type: TABLE; Schema: public; Owner: heren
--

CREATE TABLE public.pokemons (
    id integer NOT NULL,
    name character varying(255),
    description character varying(1000),
    imgurl character varying(255),
    pokemontypeid integer,
    trainerid integer
);


ALTER TABLE public.pokemons OWNER TO heren;

--
-- Name: pokemons_id_seq; Type: SEQUENCE; Schema: public; Owner: heren
--

ALTER TABLE public.pokemons ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.pokemons_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: pokemontypes; Type: TABLE; Schema: public; Owner: heren
--

CREATE TABLE public.pokemontypes (
    id integer NOT NULL,
    name character varying(255),
    description character varying(1000),
    imgurl character varying(255)
);


ALTER TABLE public.pokemontypes OWNER TO heren;

--
-- Name: pokemontypes_id_seq; Type: SEQUENCE; Schema: public; Owner: heren
--

ALTER TABLE public.pokemontypes ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.pokemontypes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: trainers; Type: TABLE; Schema: public; Owner: heren
--

CREATE TABLE public.trainers (
    id integer NOT NULL,
    name character varying(255),
    description character varying(1000),
    age integer,
    imgurl character varying(255)
);


ALTER TABLE public.trainers OWNER TO heren;

--
-- Name: trainers_id_seq; Type: SEQUENCE; Schema: public; Owner: heren
--

ALTER TABLE public.trainers ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.trainers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: pokemons; Type: TABLE DATA; Schema: public; Owner: heren
--

COPY public.pokemons (id, name, description, imgurl, pokemontypeid, trainerid) FROM stdin;
1	charmander	Charmander is a bipedal, reptilian Pokémon. Most of its body is colored orange, while its underbelly is light yellow and it has blue eyes. It has a flame at the end of its tail, which is said to signify its health.	/img/pokemons/charmander.png	1	1
3	squirtle	Squirtle is a bipedal, reptilian Pokémon. It has a blue body with purple eyes, a light brown belly, and a tough red-brown shell on its back. It has a long tail that curls into a spiral.	/img/pokemons/squirtle.png	2	2
4	oddish v.2.0	              Oddish is a Pokémon that resembles a blue plant bulb or a root vegetable. It has a round body, beady red eyes, a small mouth, and ovoid feet. Five large, green leaves sprout from its head. \n            	/img/pokemons/oddish.png	3	1
5	ground elephant	              Phanpy is a small, horizon-blue proboscid Pokémon that resembles a baby elephant. It has large, floppy ears, which it uses as fans to cool itself. \n            	/img/pokemons/ground-elephant.png	4	1
2	cutest pikachu	              Pikachu  is the cutest pokemon lol\n            	/img/pokemons/pikachu.png	5	1
\.


--
-- Data for Name: pokemontypes; Type: TABLE DATA; Schema: public; Owner: heren
--

COPY public.pokemontypes (id, name, description, imgurl) FROM stdin;
1	fire	Fire is one of the three basic elemental types along with Water and Grass, which constitute the three starter Pokémon. 	/img/pokemonTypes/fire.png
2	water	Water is one of the three basic elemental types along with Fire and Grass, which constitute the three starter Pokémon.	/img/pokemonTypes/water.jpg
3	plant	Grass is one of the three basic elemental types along with Fire and Water, which constitute the three starter Pokémon. 	/img/pokemonTypes/plant.jpeg
4	ground	Ground is one of the strongest types offensively: it is super-effective against five other types (as is Fighting) and Earthquake is one of the strongest moves in the game	/img/pokemonTypes/ground.png
5	lighting	        lighting type is strong, works well with water :>\r\n        	/img/pokemonTypes/pngtree-lightning-button-icon-design-png-image_4816773-3607522034.jpg
\.


--
-- Data for Name: trainers; Type: TABLE DATA; Schema: public; Owner: heren
--

COPY public.trainers (id, name, description, age, imgurl) FROM stdin;
1	ash	He is a Pokémon Trainer from Pallet Town whose goal is to become a Pokémon Master. His first Pokémon was a Pikachu that he received from Professor Oak after arriving late at his laboratory.	18	/img/trainers/ash.webp
2	brendan	Brendan (Japanese: ユウキ Yuuki) is the male choice for the player character in Pokémon Ruby, Sapphire, and Emerald and their Generation VI remakes, Omega Ruby and Alpha Sapphire.	18	/img/trainers/brendan.webp
3	leaf	Leaf (Japanese: リーフ Leaf) is the female player character in Pokémon FireRed and LeafGreen. Her male counterpart is Red. As such, she—alongside Red—is known throughout the Pokémon world as the Champion from Pallet Town, as well as a living legend for her defeat of Team Rocket in Kanto during her quest.	18	/img/trainers/leaf.webp
4	liko	Liko (Japanese: リコ Liko) is one of the protagonists of Pokémon Horizons: The Series, as well as the first female protagonist in the Pokémon animated series. She owns a mysterious pendant, which was given to her by her grandmother Diana, which was later revealed to be a hibernating Terapagos.	18	/img/trainers/liko.webp
\.


--
-- Name: pokemons_id_seq; Type: SEQUENCE SET; Schema: public; Owner: heren
--

SELECT pg_catalog.setval('public.pokemons_id_seq', 5, true);


--
-- Name: pokemontypes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: heren
--

SELECT pg_catalog.setval('public.pokemontypes_id_seq', 5, true);


--
-- Name: trainers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: heren
--

SELECT pg_catalog.setval('public.trainers_id_seq', 4, true);


--
-- Name: pokemons pokemons_pkey; Type: CONSTRAINT; Schema: public; Owner: heren
--

ALTER TABLE ONLY public.pokemons
    ADD CONSTRAINT pokemons_pkey PRIMARY KEY (id);


--
-- Name: pokemontypes pokemontypes_pkey; Type: CONSTRAINT; Schema: public; Owner: heren
--

ALTER TABLE ONLY public.pokemontypes
    ADD CONSTRAINT pokemontypes_pkey PRIMARY KEY (id);


--
-- Name: trainers trainers_pkey; Type: CONSTRAINT; Schema: public; Owner: heren
--

ALTER TABLE ONLY public.trainers
    ADD CONSTRAINT trainers_pkey PRIMARY KEY (id);


--
-- Name: pokemons pokemons_pokemontypeid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: heren
--

ALTER TABLE ONLY public.pokemons
    ADD CONSTRAINT pokemons_pokemontypeid_fkey FOREIGN KEY (pokemontypeid) REFERENCES public.pokemontypes(id);


--
-- Name: pokemons pokemons_trainerid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: heren
--

ALTER TABLE ONLY public.pokemons
    ADD CONSTRAINT pokemons_trainerid_fkey FOREIGN KEY (trainerid) REFERENCES public.trainers(id);


--
-- PostgreSQL database dump complete
--

