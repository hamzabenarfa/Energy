-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `login` VARCHAR(50) NOT NULL,
    `pdw` VARCHAR(50) NOT NULL,
    `role` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `etat` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Enregistrement` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idlamp` VARCHAR(30) NOT NULL,
    `ID_LIGNE` VARCHAR(20) NOT NULL,
    `ID_POSTE` VARCHAR(20) NOT NULL,
    `tension` VARCHAR(20) NOT NULL,
    `current` VARCHAR(20) NOT NULL,
    `reading_time` DATETIME(3) NOT NULL,
    `state_lamp` VARCHAR(20) NOT NULL,
    `NIV_LIGHT` VARCHAR(20) NOT NULL,
    `cosphi` VARCHAR(20) NOT NULL,
    `power` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Lampes` (
    `ID_LAMPE` VARCHAR(191) NOT NULL,
    `ID_LIGNE` VARCHAR(191) NOT NULL,
    `DATE` DATETIME(3) NOT NULL,
    `TIME` DATETIME(3) NOT NULL,
    `AIR_QUALITY` VARCHAR(191) NOT NULL,
    `TENSION_PHASE_1` VARCHAR(191) NOT NULL,
    `ETAT_LAMPE` VARCHAR(191) NOT NULL,
    `NIV_LIGHT` VARCHAR(191) NOT NULL,
    `COURANT_PHASE_1` VARCHAR(191) NOT NULL,
    `FREQUENCE` VARCHAR(191) NOT NULL,
    `HUMIDITE` VARCHAR(191) NOT NULL,
    `TEMPERATURE` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ID_LAMPE`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ligne` (
    `ID_LIGNE` VARCHAR(191) NOT NULL,
    `NOM_LIGNE` VARCHAR(191) NOT NULL,
    `ID_POSTE` VARCHAR(191) NOT NULL,
    `DATE` DATETIME(3) NOT NULL,
    `TIME` DATETIME(3) NOT NULL,
    `ETAT_TRNSFO` VARCHAR(191) NOT NULL,
    `ETAT_SECTIONNEUR` VARCHAR(191) NOT NULL,
    `ETAT_FUSIBLE` VARCHAR(191) NOT NULL,
    `ETAT_CONTACT_AUXILIAR` VARCHAR(191) NOT NULL,
    `TENSION_PHASE_1` VARCHAR(191) NOT NULL,
    `TENSION_PHASE_2` VARCHAR(191) NOT NULL,
    `TENSION_PHASE_3` VARCHAR(191) NOT NULL,
    `COURANT_PHASE_1` VARCHAR(191) NOT NULL,
    `COURANT_PHASE_2` VARCHAR(191) NOT NULL,
    `COURANT_PHASE_3` VARCHAR(191) NOT NULL,
    `FREQUENCE` VARCHAR(191) NOT NULL,
    `HUMIDITE` VARCHAR(191) NOT NULL,
    `TEMPERATURE` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ID_LIGNE`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ouvrier` (
    `ID_TECHNICIEN` INTEGER NOT NULL AUTO_INCREMENT,
    `NOM_TECHNICIEN` VARCHAR(191) NOT NULL,
    `cardID` VARCHAR(191) NOT NULL,
    `postetime` DATETIME(3) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `date_timeIn` DATETIME(3) NOT NULL,
    `date_timeOut` DATETIME(3) NOT NULL,
    `UserStat` VARCHAR(191) NOT NULL,
    `presencetime` VARCHAR(191) NOT NULL,
    `workday` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ID_TECHNICIEN`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transfo` (
    `ID_TRANSORMATEUR` VARCHAR(191) NOT NULL,
    `SECTEUR` VARCHAR(191) NOT NULL,
    `REGION` VARCHAR(191) NOT NULL,
    `GOVERNORAT` VARCHAR(191) NOT NULL,
    `ETAT_BECHOLTZ2` VARCHAR(191) NOT NULL,
    `ETAT_SECTIONNEUR` VARCHAR(191) NOT NULL,
    `ETAT_FUSIBLE` VARCHAR(191) NOT NULL,
    `ETAT_DISJONCTEUR` VARCHAR(191) NOT NULL,
    `ETAT_RELAIS` VARCHAR(191) NOT NULL,
    `ETAT_KM1` VARCHAR(191) NOT NULL,
    `ETAT_KM2` VARCHAR(191) NOT NULL,
    `ETAT_BECHOLTZ1` VARCHAR(191) NOT NULL,
    `TENSION_PHASE_1` VARCHAR(191) NOT NULL,
    `TENSION_PHASE_2` VARCHAR(191) NOT NULL,
    `TENSION_PHASE_3` VARCHAR(191) NOT NULL,
    `COURANT_PHASE_1` VARCHAR(191) NOT NULL,
    `COURANT_PHASE_2` VARCHAR(191) NOT NULL,
    `COURANT_PHASE_3` VARCHAR(191) NOT NULL,
    `FREQUENCE` VARCHAR(191) NOT NULL,
    `HUMIDITE` VARCHAR(191) NOT NULL,
    `TEMPERATURE` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ID_TRANSORMATEUR`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
