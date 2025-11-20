// express-sqlite-flights.js (ES6 modules)
// Single-file Express.js backend using Sequelize (SQLite) for Flight management
// Fields: { id, name, description, stock, price }

import express from 'express';
import cors from 'cors';
import { Sequelize, DataTypes } from 'sequelize';

const DB_NAME = `ars_app_db.sqlite`
const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB Setup
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: `./${DB_NAME}`,
  logging: false,
});

const Flight = sequelize.define('Flight', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        number: { type: DataTypes.STRING, allowNull: false },
        source: { type: DataTypes.STRING },
        destination: { type: DataTypes.STRING },        
        price: { type: DataTypes.DECIMAL(10, 2), allowNull: false, defaultValue: 0.0 },
    }, {
        timestamps: false,   // <-- disables createdAt & updatedAt
    }
);

async function initDb() {
  await sequelize.authenticate();
  await sequelize.sync({ alter: true });

  const count = await Flight.count();
  if (count === 0) {
    await Flight.bulkCreate([
      { number: 'IZ001', source: 'Mysore', destination: "New Delhi", price: 5000 },
      { number: 'IZ002', source: 'New Delhi', destination: "Mysore", price: 5500 }
    ]);
  }
}

// Routes Definition
app.get('/', (req, res) => res.json({ ok: true, service: 'Flights API' }));

// API End Points for Flight Management
app.get('/flights', async (req, res) => {
  try {
    const rows = await Flight.findAll();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/flights/:id', async (req, res) => {
  try {
    const flight = await Flight.findByPk(parseInt(req.params.id));
    if (!flight) {
        return res.status(404).json({ error: 'Flight not found' });
    }
    res.json(flight);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/flights', async (req, res) => {
  try {
    req.body.id = null;
    const flight = await Flight.create(req.body);
    res.status(201).json(flight);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/flights/:id', async (req, res) => {
  try {
    const flight = await Flight.findByPk(parseInt(req.params.id));
    if (!flight) {
        return res.status(404).json({ error: 'Flight not found' });
    }
    await flight.update(req.body);
    res.json(flight);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/flights/:id', async (req, res) => {
  try {
    const flight = await Flight.findByPk(parseInt(req.params.id));
    if (!flight) return res.status(404).json({ error: 'Flight not found' });
    await flight.destroy();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Run Server
const runAppServer = async () => {
    await initDb()
    
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}

runAppServer();