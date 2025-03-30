'use client';

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

export default function KeysPage() {
  const [formData, setFormData] = useState({
    keyHolderName: '',
    keyNumber: '',
    keyType: '',
    issueTime: '',
    returnTime: '',
    reason: '',
    department: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Key Entry Submitted:', formData);
  };

  return (
    <Card className="w-full bg-[#251dc9] text-white">
      <CardHeader>
        <CardTitle>Key Entry</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>

          {/* Key Holder Name */}
          <Input name="keyHolderName" placeholder="Key Holder Name" className="placeholder:text-gray-300" value={formData.keyHolderName} onChange={handleChange} required />

          {/* Key Number */}
          <Input name="keyNumber" placeholder="Key Number" className="placeholder:text-gray-300" value={formData.keyNumber} onChange={handleChange} required />

          {/* Key Type */}
          <Select onValueChange={(value) => setFormData({ ...formData, keyType: value })}>
            <SelectTrigger className="placeholder:text-gray-300">
              <SelectValue placeholder="Select Key Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Master Key">Master Key</SelectItem>
              <SelectItem value="Room Key">Room Key</SelectItem>
              <SelectItem value="Cabinet Key">Cabinet Key</SelectItem>
            </SelectContent>
          </Select>

          {/* Issue & Return Time */}
          <Input type="time" name="issueTime" className="placeholder:text-gray-300" value={formData.issueTime} onChange={handleChange} required />
          <Input type="time" name="returnTime" className="placeholder:text-gray-300" value={formData.returnTime} onChange={handleChange} required />

          {/* Submit Button */}
          <Button type="submit" className="col-span-2 bg-white text-blue-700 hover:bg-gray-200">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
    