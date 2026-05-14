# CareNexAI Backend API Documentation

Base URL: `http://localhost:5000/api`

## Authentication (`/api/auth`)

### 1. Login Admin
- **Method:** `POST`
- **Endpoint:** `/auth/login`
- **Body:**
  ```json
  {
    "username": "admin",
    "password": "password123"
  }
  ```
- **Response:** Returns JWT token to be used in the `Authorization: Bearer <token>` header for protected routes.

---

## Hospitals (`/api/hospitals`)

### 1. Get All Hospitals
- **Method:** `GET`
- **Endpoint:** `/hospitals`

### 2. Add Hospital 🔒 (Protected)
- **Method:** `POST`
- **Endpoint:** `/hospitals`
- **Body Example:**
  ```json
  {
    "Hospital_ID": "H001",
    "Hospital_Name": "City Care Hospital",
    "City": "Pune",
    "State": "Maharashtra"
  }
  ```

### 3. Update Hospital 🔒 (Protected)
- **Method:** `PUT`
- **Endpoint:** `/hospitals/:id`

### 4. Delete Hospital 🔒 (Protected)
- **Method:** `DELETE`
- **Endpoint:** `/hospitals/:id`

---

## Doctors (`/api/doctors`)

### 1. Get All Doctors
- **Method:** `GET`
- **Endpoint:** `/doctors`

### 2. Add Doctor 🔒 (Protected)
- **Method:** `POST`
- **Endpoint:** `/doctors`
- **Body Example:**
  ```json
  {
    "Doctor_ID": "D001",
    "Doctor_Name": "Dr. Amit Shah",
    "Specialty": "Cardiology",
    "Rating": 4.8,
    "Availability": true
  }
  ```

### 3. Update Doctor 🔒 (Protected)
- **Method:** `PUT`
- **Endpoint:** `/doctors/:id`

### 4. Delete Doctor 🔒 (Protected)
- **Method:** `DELETE`
- **Endpoint:** `/doctors/:id`

---

## Patients (`/api/patients`)

*(Note: Patient endpoints do not require authorization)*

### 1. Get All Patients
- **Method:** `GET`
- **Endpoint:** `/patients`

### 2. Get Patient by ID
- **Method:** `GET`
- **Endpoint:** `/patients/:id`
- **Description:** Returns the patient profile along with `upcomingAppointments` and `pastAppointments` automatically categorized.

### 3. Get Patient by Mobile Number
- **Method:** `GET`
- **Endpoint:** `/patients/mobile/:mobile`
- **Description:** Returns the exact same payload as "Get by ID", found via their mobile number.

### 4. Create Patient
- **Method:** `POST`
- **Endpoint:** `/patients`
- **Body Example:**
  ```json
  {
    "Patient_ID": "P001",
    "FullName": "Rahul Sharma",
    "MobileNumber": "9876543210",
    "DateOfBirth": "1985-06-15",
    "City": "Pune",
    "PreferredLanguage": "Hindi"
  }
  ```

### 5. Update / Delete Patient
- **Method:** `PUT` / `DELETE`
- **Endpoint:** `/patients/:id`

---

## Appointments (`/api/appointments`)

*(Note: Appointment endpoints do not require authorization)*

### 1. Book an Appointment
- **Method:** `POST`
- **Endpoint:** `/appointments/book`
- **Body Example:**
  ```json
  {
    "Appointment_ID": "A001",
    "Patient": "<mongodb_patient_id>",
    "Doctor": "<mongodb_doctor_id>",
    "AppointmentDate": "2026-06-15",
    "TimeSlot": "10:00 AM",
    "ReasonForVisit": "Routine Checkup"
  }
  ```

### 2. Get All Appointments
- **Method:** `GET`
- **Endpoint:** `/appointments`

### 3. Update Appointment Status
- **Method:** `PUT`
- **Endpoint:** `/appointments/:id`
- **Body Example:**
  ```json
  {
    "status": "Completed" // Enum: 'Scheduled', 'Completed', 'Cancelled'
  }
  ```

### 4. Delete Appointment
- **Method:** `DELETE`
- **Endpoint:** `/appointments/:id`
