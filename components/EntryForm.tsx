'use client';

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

export default function EntryForm() {
  const [formData, setFormData] = useState({
    entryType: 'Human', // Default selection
    name: '',
    mobile: '',
    countryCode: '+1',
    time: '',
    exitTime: '',
    reason: '',
    department: '',
    driverName: '',
    vehicleNo: '',
    vehicleType: '',
    length: '',
    width: '',
    height: '',
    keyNumber: '',
    keyType: '',
    keyHolder: '',
    keyHolderDepartment: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    // Send formData to your SQL backend
  };

  return (
    <Card className="w-full bg-[#251dc9] text-white">
      <CardHeader>
        <CardTitle>Make New Entry</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>

          {/* Entry Type Selection */}
          <Select onValueChange={(value) => setFormData({ ...formData, entryType: value })}>
            <SelectTrigger className="placeholder:text-gray-300">
              <SelectValue placeholder="Select Entry Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Human">Human Visitor</SelectItem>
              <SelectItem value="Vehicle">Vehicle Entry</SelectItem>
              <SelectItem value="Keys">Key Entry</SelectItem>
            </SelectContent>
          </Select>

          {/* Common Fields for All Entry Types */}
          <Input name="name" placeholder="Name" className="placeholder:text-gray-300" value={formData.name} onChange={handleChange} required />
          <Input type="tel" name="mobile" placeholder="Mobile No." className="placeholder:text-gray-300" value={formData.mobile} onChange={handleChange} required />

          <Input
            type="text"
            name="countryCode"
            placeholder="+1"
            className="placeholder:text-gray-300"
            value={formData.countryCode}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\+\d*$/.test(value)) {
                setFormData({ ...formData, countryCode: value });
              }
            }}
            required
          />

          <Input type="time" name="time" placeholder="Entry Time" className="placeholder:text-gray-300" value={formData.time} onChange={handleChange} required />
          <Input type="time" name="exitTime" placeholder="Exit Time" className="placeholder:text-gray-300" value={formData.exitTime} onChange={handleChange} required />

          {/* Reason Dropdown */}
          <Select onValueChange={(value) => setFormData({ ...formData, reason: value })}>
            <SelectTrigger className="placeholder:text-gray-300">
              <SelectValue placeholder="Select Reason" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Meeting">Meeting</SelectItem>
              <SelectItem value="Fest Promotion">Fest Promotion</SelectItem>
              <SelectItem value="Delivery">Delivery</SelectItem>
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

          {/* Vehicle-Specific Fields */}
          {formData.entryType === "Vehicle" && (
            <>
              <Input name="driverName" placeholder="Driver Name" className="placeholder:text-gray-300" value={formData.driverName} onChange={handleChange} required />
              <Input name="vehicleNo" placeholder="Vehicle No." className="placeholder:text-gray-300" value={formData.vehicleNo} onChange={handleChange} required />

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

              <Input type="number" name="length" placeholder="Vehicle Length (m)" className="placeholder:text-gray-300" value={formData.length} onChange={handleChange} required />
              <Input type="number" name="width" placeholder="Vehicle Width (m)" className="placeholder:text-gray-300" value={formData.width} onChange={handleChange} required />
              <Input type="number" name="height" placeholder="Vehicle Height (m)" className="placeholder:text-gray-300" value={formData.height} onChange={handleChange} required />
            </>
          )}

          {/* Key-Specific Fields */}
          {formData.entryType === "Keys" && (
            <>
              <Input name="keyNumber" placeholder="Key Number" className="placeholder:text-gray-300" value={formData.keyNumber} onChange={handleChange} required />

              <Select onValueChange={(value) => setFormData({ ...formData, keyType: value })}>
                <SelectTrigger className="placeholder:text-gray-300">
                  <SelectValue placeholder="Select Key Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Room Key">Room Key</SelectItem>
                  <SelectItem value="Cabinet Key">Cabinet Key</SelectItem>
                  <SelectItem value="Main Gate Key">Main Gate Key</SelectItem>
                </SelectContent>
              </Select>

              <Input name="keyHolder" placeholder="Key Holder Name" className="placeholder:text-gray-300" value={formData.keyHolder} onChange={handleChange} required />

              <Select onValueChange={(value) => setFormData({ ...formData, keyHolderDepartment: value })}>
                <SelectTrigger className="placeholder:text-gray-300">
                  <SelectValue placeholder="Select Key Holder Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="IT">IT</SelectItem>
                  <SelectItem value="CSE">CSE</SelectItem>
                  <SelectItem value="Mechanical">Mechanical</SelectItem>
                  <SelectItem value="Electronics">Electronics</SelectItem>
                  <SelectItem value="Admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </>
          )}

          {/* Submit Button */}
          <Button type="submit" className="col-span-2 bg-white text-blue-700 hover:bg-gray-200">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
