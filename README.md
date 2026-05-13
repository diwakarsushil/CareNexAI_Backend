# CareNexAI Backend API

RESTful API backend for the CareNexAI hackathon project.

## Technologies Used
- Node.js
- Express.js
- MongoDB Atlas (with Mongoose)
- Environment Variables (dotenv)
- Security & CORS (helmet, cors)

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env` file in the root directory (you can copy `.env.example`) and add your MongoDB Atlas URI:
```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/carenexai?retryWrites=true&w=majority
```

### 3. Uncomment DB Connection in `server.js`
In `server.js`, find and uncomment the `connectDB();` line once your `.env` file is ready.

### 4. Database Seeding
To populate the database with dummy data, run:
```bash
npm run seed
```
*(To destroy data, you can run `node seeders/seeder.js -d`)*

### 5. Run the Server
```bash
# Run in development mode (with nodemon)
npm run dev

# Run in production mode
npm start
```
Server runs on `http://localhost:5000`.

## API Endpoints

### Hospitals
- `GET /api/hospitals` - Get all hospitals
- `GET /api/hospitals/:id` - Get hospital by `Hospital_ID`
- `POST /api/hospitals` - Create a new hospital
- `PUT /api/hospitals/:id` - Update a hospital
- `DELETE /api/hospitals/:id` - Delete a hospital

**Example Hospital JSON:**
```json
{
  "Hospital_ID": "H004",
  "Hospital_Name": "City General",
  "City": "Pune",
  "State": "Maharashtra"
}
```

### Doctors
- `GET /api/doctors` - Get all doctors
- `GET /api/doctors/:id` - Get doctor by `Doctor_ID`
- `POST /api/doctors` - Create a new doctor
- `PUT /api/doctors/:id` - Update a doctor
- `DELETE /api/doctors/:id` - Delete a doctor

**Example Doctor JSON:**
```json
{
  "Doctor_ID": "D006",
  "Doctor_Name": "Dr. Sarah Lee",
  "Specialty": "Neurology",
  "Rating": 4.9,
  "Availability": true
}
```
