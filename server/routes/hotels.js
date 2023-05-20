import express from 'express';
import { createHotel, deleteHotel, getAllCities, getAllCityHotelCount, getHotel, getHotelCountByCity, getHotelCountByType, getHotelRooms, getHotels, updateHotel } from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verification.js';

const router = express.Router();

// CREATE operation
router.post('/', verifyAdmin, createHotel); //Only admin can create a new Hotel

// READ All
router.get('/', getHotels); // Public access

// READ One by Id
router.get('/id/:id', getHotel); // Public access

// UPDATE
router.patch('/id/:id', verifyAdmin, updateHotel); //Only admin can update a Hotel

// DELETE
router.delete('/id/:id', verifyAdmin, deleteHotel); //Only admin can delete a Hotel


router.get('/countByCity', getHotelCountByCity); // Public access
router.get('/countByType', getHotelCountByType); // Public access
router.get('/allHotelCountByCity', getAllCityHotelCount); // Public access
router.get('/rooms/:id', getHotelRooms); // Public access
router.get('/allCities', getAllCities); // Public access

export default router;