'use client';

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

export default function VehiclesPage() {
  const [formData, setFormData] = useState({
    driverName: '',
    vehicleNo: '',
    vehicleType: '',
    entryTime: '',
    exitTime: '',
    reason: '',
    department: '',
    length: '',
    width: '',
    height: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Vehicle Entry Submitted:', formData);
  };

  return (
    <Card className="w-full bg-[#251dc9] text-white">
      <CardHeader>
        <CardTitle>Vehicle Entry</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>

          {/* Driver Name */}
          <Input name="driverName" placeholder="Driver Name" className="placeholder:text-gray-300" value={formData.driverName} onChange={handleChange} required />

          {/* Vehicle Number */}
          <Input name="vehicleNo" placeholder="Vehicle Number" className="placeholder:text-gray-300" value={formData.vehicleNo} onChange={handleChange} required />

          {/* Vehicle Type */}
          <Select onValueChange={(value) => setFormData({ ...formData, vehicleType: value })}>
            <SelectTrigger className="placeholder:text-gray-300">
              <SelectValue placeholder="Select Vehicle Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Car">Car</SelectItem>
              <SelectItem value="Truck">Truck</SelectItem>
              <SelectItem value="Bike">Bike</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>

          {/* Entry & Exit Time */}
          <Input type="time" name="entryTime" className="placeholder:text-gray-300" value={formData.entryTime} onChange={handleChange} required />
          <Input type="time" name="exitTime" className="placeholder:text-gray-300" value={formData.exitTime} onChange={handleChange} required />

          {/* Reason Dropdown */}
          <Select onValueChange={(value) => setFormData({ ...formData, reason: value })}>
            <SelectTrigger className="placeholder:text-gray-300">
              <SelectValue placeholder="Select Reason" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Delivery">Delivery</SelectItem>
              <SelectItem value="Event">Event</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>

          {/* Department Dropdown */}
          <Select onValueChange={(value) => setFormData({ ...formData, department: value })}>
            <SelectTrigger className="placeholder:text-gray-300">
              <SelectValue placeholder="Select Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="IT">IT</SelectItem>
              <SelectItem value="CSE">CSE</SelectItem>
              <SelectItem value="Mechanical">Mechanical</SelectItem>
              <SelectItem value="Electronics">Electronics</SelectItem>
              <SelectItem value="All">All</SelectItem>
            </SelectContent>
          </Select>

          {/* Vehicle Dimensions */}
          <Input type="number" name="length" placeholder="Vehicle Length (m)" className="placeholder:text-gray-300" value={formData.length} onChange={handleChange} required />
          <Input type="number" name="width" placeholder="Vehicle Width (m)" className="placeholder:text-gray-300" value={formData.width} onChange={handleChange} required />
          <Input type="number" name="height" placeholder="Vehicle Height (m)" className="placeholder:text-gray-300" value={formData.height} onChange={handleChange} required />

          {/* Submit Button */}
          <Button type="submit" className="col-span-2 bg-white text-blue-700 hover:bg-gray-200">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
