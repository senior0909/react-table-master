-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 08, 2022 at 03:32 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `payment_manager2`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `SKU` int(11) DEFAULT NULL,
  `Supplier` varchar(250) DEFAULT NULL,
  `Description` varchar(2000) DEFAULT NULL,
  `Cost_USD` decimal(10,2) DEFAULT NULL,
  `Shipping_USD` decimal(10,2) DEFAULT NULL,
  `IsrealSellingPriceUSD` decimal(10,2) DEFAULT NULL,
  `₪_Rate` decimal(10,2) DEFAULT NULL,
  `Remark` decimal(10,2) DEFAULT NULL,
  `MethodPaid` varchar(100) DEFAULT NULL,
  `MethodPaidInfo` varchar(1000) DEFAULT NULL,
  `Reshimon` int(200) DEFAULT NULL,
  `Amount_paid_supplier_ILS` decimal(10,2) DEFAULT NULL,
  `PaidSupplier` varchar(10) DEFAULT NULL,
  `PaidShipping` tinytext DEFAULT NULL,
  `VATPaidSupplierILS` decimal(10,2) DEFAULT NULL,
  `ReportedVATForVatBack` text DEFAULT NULL,
  `ReportedVatExport` mediumtext DEFAULT NULL,
  `CD2U_Invoice` varchar(15) DEFAULT NULL,
  `PaymnetILReport` char(10) DEFAULT NULL,
  `PaidIsreal` text DEFAULT NULL,
  `PaymentType` varchar(30) DEFAULT NULL,
  `CheckInfo` varchar(3000) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `SKU`, `Supplier`, `Description`, `Cost_USD`, `Shipping_USD`, `IsrealSellingPriceUSD`, `₪_Rate`, `Remark`, `MethodPaid`, `MethodPaidInfo`, `Reshimon`, `Amount_paid_supplier_ILS`, `PaidSupplier`, `PaidShipping`, `VATPaidSupplierILS`, `ReportedVATForVatBack`, `ReportedVatExport`, `CD2U_Invoice`, `PaymnetILReport`, `PaidIsreal`, `PaymentType`, `CheckInfo`, `created_at`, `updated_at`) VALUES
(15, 40000015, '3', 'test 1', '100.00', '71.00', '55.00', '3.27', NULL, NULL, NULL, 545465, NULL, 'Yes', 'Yes', '285.41', 'Yes', 'yes', '24242', 'fgsxg', 'Yes', NULL, 'fdffds', '2022-05-25 15:19:16', '2022-05-25 15:19:16'),
(52, 52, '1', 'test3', '25.00', '71.00', '19.00', '3.17', NULL, NULL, NULL, 444452, NULL, 'Yes', NULL, '541.97', NULL, 'yes', 'dzsgddg', 'd1', 'Yes', NULL, 'rrrr', '2022-05-25 15:19:16', '2022-05-25 15:19:16'),
(160, 31000160, '2', 'tes2', '40.00', '71.00', '39.00', '3.21', NULL, NULL, NULL, 5454, NULL, 'Yes', 'Yes', '211.48', 'Yes', 'yes', 'sddffds', 'saf', 'Yes', NULL, 'ffff', '2022-05-25 15:19:16', '2022-05-25 15:19:16');

-- --------------------------------------------------------

--
-- Table structure for table `suppliers`
--

CREATE TABLE `suppliers` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `suppliers`
--

INSERT INTO `suppliers` (`id`, `name`, `created_at`, `updated_at`) VALUES
(12, '1', '2022-05-25 15:12:58', '2022-05-25 15:12:58'),
(13, '2', '2022-05-25 15:19:16', '2022-05-25 15:19:16'),
(14, '3', '2022-05-25 15:19:16', '2022-05-25 15:19:16'),
(15, '4', '2022-05-25 15:19:16', '2022-05-25 15:19:16'),
(16, '5', '2022-05-25 15:19:16', '2022-05-25 15:19:16');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Supplier` (`Supplier`);

--
-- Indexes for table `suppliers`
--
ALTER TABLE `suppliers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `suppliers`
--
ALTER TABLE `suppliers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`Supplier`) REFERENCES `suppliers` (`name`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
