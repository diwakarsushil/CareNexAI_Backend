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
- **Note:** `:id` refers to the custom `Hospital_ID` (e.g., `H001`).

### 4. Delete Hospital 🔒 (Protected)
- **Method:** `DELETE`
- **Endpoint:** `/hospitals/:id`
- **Note:** `:id` refers to the custom `Hospital_ID`.

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
    "Availability": true,
    "schedule": [
      { "date": "2026-05-15", "timings": ["10:00 AM", "11:00 AM"] }
    ]
  }
  ```

### 3. Update Doctor 🔒 (Protected)
- **Method:** `PUT`
- **Endpoint:** `/doctors/:id`
- **Note:** `:id` refers to the custom `Doctor_ID` (e.g., `D001`).

### 4. Delete Doctor 🔒 (Protected)
- **Method:** `DELETE`
- **Endpoint:** `/doctors/:id`
- **Note:** `:id` refers to the custom `Doctor_ID`.

---

## Patients (`/api/patients`)

### 1. Get All Patients
- **Method:** `GET`
- **Endpoint:** `/patients`

### 2. Get Patient by ID
- **Method:** `GET`
- **Endpoint:** `/patients/:id`
- **Note:** `:id` refers to the custom `Patient_ID` (e.g., `P001`).
- **Description:** Returns the patient profile along with `upcomingAppointments` and `pastAppointments` (with populated Doctor data).

### 3. Get Patient by Mobile Number
- **Method:** `GET`
- **Endpoint:** `/patients/mobile/:mobile`
- **Description:** Returns the same payload as "Get by ID", found via mobile number.

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

### 5. Update Patient
- **Method:** `PUT`
- **Endpoint:** `/patients/:id`
- **Note:** `:id` refers to the custom `Patient_ID`.

### 6. Delete Patient
- **Method:** `DELETE`
- **Endpoint:** `/patients/:id`
- **Note:** `:id` refers to the custom `Patient_ID`.

---

## Appointments (`/api/appointments`)

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
- **Description:** Returns all appointments with populated Patient and Doctor details.

### 3. Get Appointment by ID
- **Method:** `GET`
- **Endpoint:** `/appointments/:id`
- **Note:** `:id` refers to the custom `Appointment_ID` (e.g., `A001`).

### 4. Update Appointment Status
- **Method:** `PUT`
- **Endpoint:** `/appointments/:id`
- **Note:** `:id` refers to the custom `Appointment_ID`.
- **Body Example:**
  ```json
  {
    "Status": "Completed" 
  }
  ```

### 5. Delete Appointment
- **Method:** `DELETE`
- **Endpoint:** `/appointments/:id`
- **Note:** `:id` refers to the custom `Appointment_ID`.
