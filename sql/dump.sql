--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3 (Debian 15.3-1.pgdg120+1)
-- Dumped by pg_dump version 15.3 (Debian 15.3-1.pgdg120+1)

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
-- Name: Result; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Result" (
    id text NOT NULL,
    hour integer NOT NULL,
    minute integer NOT NULL,
    angle integer NOT NULL,
    date timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "lastRequest" timestamp(3) without time zone
);


ALTER TABLE public."Result" OWNER TO postgres;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Data for Name: Result; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Result" (id, hour, minute, angle, date, "lastRequest") FROM stdin;
6d3e63cd-3246-4ae7-976f-84e940920516	11	32	138	2023-08-04 19:20:21.795	2023-08-04 19:22:33.003
e0d43e8e-e6bb-401f-9619-8d50b9c63456	11	34	126	2023-08-04 19:22:35.801	\N
dbdd60d7-fd94-4f20-bc53-1366ebdf8f20	11	35	120	2023-08-04 19:22:39.892	\N
bacd5a0b-8006-4f5b-93fc-a6d5b47ef569	1	35	180	2023-08-04 19:22:43.188	\N
33645d26-134b-4ec1-a140-7319ffaca8c8	12	35	150	2023-08-04 19:22:51.691	\N
90fa35e7-469b-4d40-99f5-8dba55f672ea	12	30	180	2023-08-04 19:22:55.774	\N
f8411563-686b-4807-93d8-7f9837ee9260	12	59	6	2023-08-04 19:23:03.495	\N
3f2f3ed4-bf2c-4e4a-bb0e-3193b4c6e005	12	12	72	2023-08-04 19:23:09.898	\N
5735355f-c9b4-4996-8924-a0d8575ed40b	12	15	90	2023-08-04 19:23:13.491	\N
f0e82c4d-68f2-4dac-99ee-199cba17c363	12	45	90	2023-08-04 19:23:18.559	\N
ff14d980-4c5f-4300-9b5a-822e0d33eac9	8	45	30	2023-08-04 19:23:24.272	\N
f471bcad-7292-478d-861f-3c8e53c38389	9	45	0	2023-08-04 19:23:27.408	\N
7c254197-8262-4406-b4f1-9927d3cd6c2d	6	45	90	2023-08-04 19:23:34.009	\N
647fcd8c-4542-4e84-a279-1704923aa02c	4	45	150	2023-08-04 19:23:42.835	\N
d76d82cd-cd64-4bb7-b810-bcb11f06c563	4	46	156	2023-08-04 19:23:46.243	2023-08-04 19:23:47.475
11653b2c-6cbc-4e71-8ef7-1ad4853bc5d8	9	46	6	2023-08-04 19:24:00.953	\N
c09f4e60-6ac7-46c7-b5ab-41e266a79b56	9	49	24	2023-08-04 19:24:14.727	\N
3c8757a6-acf2-4522-b169-f5d95500f989	10	50	0	2023-08-04 19:24:27.837	\N
ba45bf84-6b15-4708-baf4-9740f6640a38	10	51	6	2023-08-04 19:24:32.184	\N
027eccf2-3f93-4370-8835-1ae68f1217d1	9	0	90	2023-08-04 19:24:39.027	2023-08-04 19:24:44.405
8b87eaf3-4c36-4fb2-9fb5-f96d3a6cccc1	10	0	60	2023-08-04 19:24:35.178	2023-08-04 19:25:57.074
aa86962b-fc4e-4c2c-bfca-447d02a0bafe	11	0	30	2023-08-04 19:26:02.626	2023-08-04 19:26:03.264
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
bfe8ea8f-cbe0-410a-bc26-7603db3aac27	4260abf365937b53a9239cc2b8a749f89ac49121efeaff4f95a09175cfa5ec2e	2023-08-04 19:15:57.827286+00	20230801215253_inital_migration	\N	\N	2023-08-04 19:15:57.814319+00	1
5ecd5372-383a-40ec-9c1c-63d20848c8e4	d7f2392aacc0514fe570cba4ba813391395a1fe9d59693c982e301bd378f18f8	2023-08-04 19:15:57.835626+00	20230804191227_add_date_and_last_request	\N	\N	2023-08-04 19:15:57.829428+00	1
\.


--
-- Name: Result Result_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Result"
    ADD CONSTRAINT "Result_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

