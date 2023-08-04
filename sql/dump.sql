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
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone,
    "deletedAt" timestamp(3) without time zone
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

COPY public."Result" (id, hour, minute, angle, "createdAt", "updatedAt", "deletedAt") FROM stdin;
ca974785-1b7f-4437-8fb0-1156a0c912d3	5	0	150	2023-08-04 16:23:04.965	\N	\N
dfd68316-3e8f-4a0b-bc9e-a84869a0e98f	5	1	144	2023-08-04 16:23:08.781	\N	\N
39beda94-367b-4c41-89ac-012779cf2a53	5	3	132	2023-08-04 16:23:11.879	\N	\N
22f7dde6-e198-4979-8ecc-3a10fa3f0c5f	5	4	126	2023-08-04 16:23:15.728	\N	\N
e3df88de-5f8e-4259-ac9c-f3443663afe0	5	5	120	2023-08-04 16:23:18.758	\N	\N
9fe28d05-1477-4132-9958-0db9619906d9	5	6	114	2023-08-04 16:23:23.434	\N	\N
626e1568-5593-485e-a179-35e5d08dd201	5	7	108	2023-08-04 16:23:25.942	\N	\N
1cd3fe4d-e6a3-45f5-b28a-1e9e1f6997e3	5	8	102	2023-08-04 16:23:28.607	\N	\N
7b3ea6b4-90d7-42b3-a7b8-cc7ea276de3d	5	9	96	2023-08-04 16:23:31.254	\N	\N
deda19ab-b30e-4a48-94c1-35849463ea73	5	10	90	2023-08-04 16:23:37.093	\N	\N
49593d54-8089-4c57-a589-63383a21ece1	5	12	78	2023-08-04 16:23:39.789	\N	\N
86eddcb2-c7be-48b1-83f6-4a40a3b7c356	5	13	72	2023-08-04 16:23:43.372	\N	\N
3e9eb699-81e1-45d2-9258-9616fb14b63e	5	14	66	2023-08-04 16:24:34.088	\N	\N
35f33d4b-27c8-49b0-9382-7b13643c3ae5	5	15	60	2023-08-04 16:24:37.136	\N	\N
2c9e5a24-acb8-4c52-9632-c6aaa4cdb566	5	16	54	2023-08-04 16:24:39.901	\N	\N
e2e06987-1895-438f-84b1-27c6c8f0ab9c	5	17	48	2023-08-04 16:24:43.775	\N	\N
215fb0d7-a3a5-4d56-b2a8-1ca96687526c	5	18	42	2023-08-04 16:24:47.489	\N	\N
d76e91bb-0d1c-4f63-b27c-128c28218bcb	5	19	36	2023-08-04 16:24:50.108	\N	\N
741384c2-5d33-4904-b80c-14213f8689e3	5	20	30	2023-08-04 16:24:56.483	\N	\N
6216c287-45ed-4f07-b7ad-2704032a1a32	5	21	24	2023-08-04 16:24:59.48	\N	\N
8d9a06b4-6b78-4efe-b3d4-3aef437c814d	5	22	18	2023-08-04 16:25:02.441	2023-08-04 16:25:02.472	\N
7715bcc7-885e-431d-8a8b-17ecdc67670f	5	24	6	2023-08-04 16:25:25.305	\N	\N
29882af8-da9a-46cb-93a9-919bb46fba3a	5	25	0	2023-08-04 16:25:28.928	\N	\N
8399a625-c8d8-4ac7-a02a-8ab542bbb763	5	26	6	2023-08-04 16:25:31.97	\N	\N
6e5ee4ec-c62b-4b9d-9aab-58a4496732b6	5	27	12	2023-08-04 16:25:34.249	\N	\N
ecc5df82-69ee-434f-92b5-d8679a833425	5	28	18	2023-08-04 16:25:36.652	\N	\N
89acc7d6-e9be-417c-880a-119d30a79d73	5	29	24	2023-08-04 16:25:39.318	\N	\N
d85d1f83-947d-4943-923f-49b8134b5b80	5	30	30	2023-08-04 16:25:45.438	\N	\N
2ab24a43-a17c-40c7-be87-565ce6d0a0e5	6	30	0	2023-08-04 16:25:49.479	\N	\N
aa04f5da-7c55-4568-9d59-c02ae730624d	12	30	180	2023-08-04 16:25:54.594	\N	\N
b241db71-0340-4b4a-ae17-14fa75403836	11	30	150	2023-08-04 16:26:52.884	2023-08-04 16:27:32.838	\N
ec7d52b4-0136-47f9-bf0c-2c20b155bfb5	11	31	144	2023-08-04 16:27:53.78	\N	\N
de779337-37b2-4e62-b20c-a84369c59c6e	11	32	138	2023-08-04 16:27:56.458	\N	\N
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
72dd014d-b34f-42d8-8a64-35dd64cd5741	4260abf365937b53a9239cc2b8a749f89ac49121efeaff4f95a09175cfa5ec2e	2023-08-04 16:21:11.169801+00	20230801215253_inital_migration	\N	\N	2023-08-04 16:21:11.158427+00	1
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

