-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 22, 2020 at 04:36 PM
-- Server version: 10.3.13-MariaDB-log
-- PHP Version: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mevn`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `bio` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `username`, `password`, `bio`, `created`) VALUES
(1, 'test@test.gg', 'test', '$2b$10$peiXyFIR.tIACUynzRUZ3uTA/.7QpceOZMheIdpqu6xSBdwMv9vgi', 'test', '2020-02-21'),
(3, 'test2@test2.gg', 'test2', '$2b$10$4t8UY2aT9JT2.PVGxfBWwuIPWfaJxFhJuf.2B.1QxuawwgqBNmVEu', 'test2', '2020-02-21'),
(4, 'test3@test.gg', 'test3', '$2b$10$yzPIKgAdm4yCQTln0EQNxeE15lNFre8pq0ulkvwGdJS2y4gLDfEgO', 'test3', '2020-02-21'),
(5, 'sss@test.gg', 'sss', '$2b$10$VdRTHxLu4lpdDlmFej9Xt.jxr0vZs4..OIxmlaN1VfBPYHzDnj57m', 'sss', '2020-02-21'),
(6, 'jalbot17@gmail.com', 'JustLikeSonneiko', '$2b$10$/pLk.X8H5qPFsBTRrr.4NehC7zPQhh8rr9x0BfT.KeFFgVaQRBxIe', 'JustLikeSonneiko', '2020-02-21'),
(9, 'sss1@test.gg', 'sss1', '$2b$10$p9Hytm8IXIU4nx4Pl.UaduriE4q3M6h9OiAlnLEwnE30KgeSYmdqa', 'sss1', '2020-02-22'),
(10, '1333@gg.cc', '1333', '$2b$10$od3V4DKEDn0SntS/HoekBev71FnZ0K7p/uvsb0CKpA6NOWVrShVhK', '1333', '2020-02-22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
