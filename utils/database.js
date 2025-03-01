// Database schema and mock functions to simulate MySQL database
const database = {
    tables: {
        students: [],
        families: [],
        pairings: [],
        reviews: [],
        payments: [],
        users: [],
        documents: []
    },

    // Schema definitions (for MySQL migration)
    schema: {
        students: `
            CREATE TABLE students (
                id VARCHAR(36) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                phone VARCHAR(20),
                dateOfBirth DATE,
                gender VARCHAR(10),
                nationality VARCHAR(100),
                nativeLanguage VARCHAR(50),
                englishLevel VARCHAR(20),
                startDate DATE NOT NULL,
                endDate DATE NOT NULL,
                status VARCHAR(20) DEFAULT 'new_lead',
                city VARCHAR(100),
                school VARCHAR(255),
                programType VARCHAR(50),
                dietaryRestrictions TEXT,
                medicalConditions TEXT,
                emergencyContactName VARCHAR(255),
                emergencyContactPhone VARCHAR(20),
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            );
        `,
        families: `
            CREATE TABLE families (
                id VARCHAR(36) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                phone VARCHAR(20),
                address TEXT,
                city VARCHAR(100),
                status VARCHAR(20) DEFAULT 'new_lead',
                availability BOOLEAN DEFAULT true,
                maxStudents INT DEFAULT 1,
                languages TEXT,
                familyMembers JSON,
                dietaryOptions TEXT,
                houseRules TEXT,
                backgroundCheckDate DATE,
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            );
        `,
        pairings: `
            CREATE TABLE pairings (
                id VARCHAR(36) PRIMARY KEY,
                studentId VARCHAR(36),
                familyId VARCHAR(36),
                startDate DATE,
                endDate DATE,
                status VARCHAR(20),
                roomType VARCHAR(50),
                mealPlan VARCHAR(50),
                monthlyRate DECIMAL(10,2),
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (studentId) REFERENCES students(id),
                FOREIGN KEY (familyId) REFERENCES families(id)
            );
        `,
        payments: `
            CREATE TABLE payments (
                id VARCHAR(36) PRIMARY KEY,
                pairingId VARCHAR(36),
                amount DECIMAL(10,2),
                type VARCHAR(20),
                status VARCHAR(20),
                dueDate DATE,
                paidDate DATE,
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (pairingId) REFERENCES pairings(id)
            );
        `,
        documents: `
            CREATE TABLE documents (
                id VARCHAR(36) PRIMARY KEY,
                entityId VARCHAR(36),
                entityType VARCHAR(20),
                documentType VARCHAR(50),
                filename VARCHAR(255),
                filepath VARCHAR(255),
                mimeType VARCHAR(100),
                filesize INT,
                uploadedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `
    },

    // Database operations
    async create(table, data) {
        try {
            const id = crypto.randomUUID();
            const timestamp = new Date().toISOString();
            const record = {
                id,
                ...data,
                createdAt: timestamp,
                updatedAt: timestamp
            };
            this.tables[table].push(record);
            return record;
        } catch (error) {
            reportError(error);
            throw new Error(`Failed to create record in ${table}`);
        }
    },

    async update(table, id, data) {
        try {
            const index = this.tables[table].findIndex(record => record.id === id);
            if (index === -1) throw new Error('Record not found');
            
            this.tables[table][index] = {
                ...this.tables[table][index],
                ...data,
                updatedAt: new Date().toISOString()
            };
            return this.tables[table][index];
        } catch (error) {
            reportError(error);
            throw new Error(`Failed to update record in ${table}`);
        }
    },

    async get(table, id) {
        try {
            const record = this.tables[table].find(record => record.id === id);
            if (!record) throw new Error('Record not found');
            return record;
        } catch (error) {
            reportError(error);
            throw new Error(`Failed to get record from ${table}`);
        }
    },

    async delete(table, id) {
        try {
            const index = this.tables[table].findIndex(record => record.id === id);
            if (index === -1) throw new Error('Record not found');
            this.tables[table].splice(index, 1);
            return true;
        } catch (error) {
            reportError(error);
            throw new Error(`Failed to delete record from ${table}`);
        }
    },

    async list(table, filters = {}) {
        try {
            let records = [...this.tables[table]];
            
            // Apply filters
            Object.entries(filters).forEach(([key, value]) => {
                records = records.filter(record => record[key] === value);
            });
            
            return records;
        } catch (error) {
            reportError(error);
            throw new Error(`Failed to list records from ${table}`);
        }
    }
};
