
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar as CalendarIcon, MapPin, Plus, List, Check, Hotel, Plane, CreditCard } from 'lucide-react';
import { cities, getAttractionsByCity, Attraction } from '@/data/attractions';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface SelectedAttraction extends Attraction {
  day: number;
}

interface LocationState {
  selectedCity?: string;
}

const PlanTrip: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state as LocationState;
  
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(
    new Date(new Date().setDate(new Date().getDate() + 7))
  );
  const [selectedCity, setSelectedCity] = useState<string | null>(locationState?.selectedCity || null);
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [selectedAttractions, setSelectedAttractions] = useState<SelectedAttraction[]>([]);
  const [tripName, setTripName] = useState<string>('My Trip');
  const [citySearchQuery, setCitySearchQuery] = useState<string>('');
  const [filteredCities, setFilteredCities] = useState(cities);
  const [flightBookingDialogOpen, setFlightBookingDialogOpen] = useState(false);
  const [hotelBookingDialogOpen, setHotelBookingDialogOpen] = useState(false);
  
  // Calculate trip duration in days
  const tripDuration = startDate && endDate 
    ? Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1
    : 0;
  
  // Days array for the trip
  const tripDays = Array.from({ length: tripDuration }, (_, i) => i + 1);

  useEffect(() => {
    if (selectedCity) {
      const cityAttractions = getAttractionsByCity(selectedCity);
      setAttractions(cityAttractions);
    }
  }, [selectedCity]);

  useEffect(() => {
    if (citySearchQuery) {
      const filtered = cities.filter(city => 
        city.name.toLowerCase().includes(citySearchQuery.toLowerCase()) ||
        city.country.toLowerCase().includes(citySearchQuery.toLowerCase())
      );
      setFilteredCities(filtered);
    } else {
      setFilteredCities(cities);
    }
  }, [citySearchQuery]);
  
  const handleCitySelect = (cityName: string) => {
    setSelectedCity(cityName);
    const cityAttractions = getAttractionsByCity(cityName);
    setAttractions(cityAttractions);
  };
  
  const handleAddAttraction = (attraction: Attraction, day: number) => {
    // Check if attraction is already added to any day
    const isAlreadyAdded = selectedAttractions.some(a => a.id === attraction.id);
    
    if (isAlreadyAdded) {
      // If already added, update the day
      setSelectedAttractions(prev => 
        prev.map(a => a.id === attraction.id ? { ...a, day } : a)
      );
      toast.success(`Moved ${attraction.name} to Day ${day}`);
    } else {
      // If not added, add it
      setSelectedAttractions(prev => [...prev, { ...attraction, day }]);
      toast.success(`Added ${attraction.name} to Day ${day}`);
    }
  };
  
  const handleRemoveAttraction = (attractionId: string) => {
    setSelectedAttractions(prev => prev.filter(a => a.id !== attractionId));
    toast.info("Attraction removed from itinerary");
  };
  
  const handleFinishPlanning = () => {
    // In a real app, this would save the trip to a database
    // For now, we'll just show a success message and navigate
    toast.success("Trip saved successfully!");
    navigate('/trips');
  };

  const handleBookFlight = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Flight booked successfully!");
    setFlightBookingDialogOpen(false);
  };

  const handleBookHotel = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Hotel booked successfully!");
    setHotelBookingDialogOpen(false);
  };
  
  return (
    <Layout>
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Trip</h1>
            <p className="text-lg text-gray-600">
              Select your travel dates, destination, and build your perfect itinerary
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Trip Details</CardTitle>
                  <CardDescription>Select your travel dates and destination</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Trip Name</label>
                    <input
                      type="text"
                      value={tripName}
                      onChange={(e) => setTripName(e.target.value)}
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Start Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !startDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={startDate}
                          onSelect={setStartDate}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">End Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !endDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={endDate}
                          onSelect={setEndDate}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Destination</label>
                    <div className="space-y-2">
                      <Input 
                        type="text"
                        placeholder="Search for cities..."
                        value={citySearchQuery}
                        onChange={(e) => setCitySearchQuery(e.target.value)}
                        className="mb-2"
                      />
                      <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
                        {filteredCities.map(city => (
                          <Button 
                            key={city.id}
                            variant={selectedCity === city.name ? "default" : "outline"}
                            className="justify-start h-auto py-2 px-3"
                            onClick={() => handleCitySelect(city.name)}
                          >
                            <MapPin className="h-4 w-4 mr-2" />
                            {city.name}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2">
                  <Button 
                    className="w-full" 
                    onClick={handleFinishPlanning}
                    disabled={!selectedCity || tripDuration <= 0 || selectedAttractions.length === 0}
                  >
                    <Check className="h-4 w-4 mr-2" />
                    End Planning
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Trip Summary */}
              {selectedCity && (
                <Card>
                  <CardHeader>
                    <CardTitle>Trip Summary</CardTitle>
                    <CardDescription>
                      {tripDuration} days in {selectedCity}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm">
                      <strong>Dates:</strong>{' '}
                      {startDate && endDate && (
                        <>
                          {format(startDate, "MMM d, yyyy")} — {format(endDate, "MMM d, yyyy")}
                        </>
                      )}
                    </p>
                    <p className="text-sm">
                      <strong>Attractions:</strong> {selectedAttractions.length} planned
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-2">
                    {/* Flight Booking */}
                    <Dialog open={flightBookingDialogOpen} onOpenChange={setFlightBookingDialogOpen}>
                      <DialogTrigger asChild>
                        <Button className="w-full" variant="outline">
                          <Plane className="h-4 w-4 mr-2" />
                          Book Flight
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle>Book Your Flight</DialogTitle>
                          <DialogDescription>
                            Find and book flights to {selectedCity}
                          </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleBookFlight} className="space-y-4 mt-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">From</label>
                            <Input placeholder="Departure airport" required />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">To</label>
                            <Input value={selectedCity} readOnly />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Depart</label>
                              <Input 
                                type="date" 
                                value={startDate ? format(startDate, "yyyy-MM-dd") : ""} 
                                required 
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Return</label>
                              <Input 
                                type="date" 
                                value={endDate ? format(endDate, "yyyy-MM-dd") : ""} 
                                required 
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Passengers</label>
                              <Input type="number" min="1" defaultValue="1" required />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Class</label>
                              <select className="w-full p-2 border rounded-md">
                                <option>Economy</option>
                                <option>Premium Economy</option>
                                <option>Business</option>
                                <option>First</option>
                              </select>
                            </div>
                          </div>
                          <div className="pt-4">
                            <Button type="submit" className="w-full">
                              <CreditCard className="h-4 w-4 mr-2" />
                              Book Now
                            </Button>
                          </div>
                        </form>
                      </DialogContent>
                    </Dialog>

                    {/* Hotel Booking */}
                    <Dialog open={hotelBookingDialogOpen} onOpenChange={setHotelBookingDialogOpen}>
                      <DialogTrigger asChild>
                        <Button className="w-full" variant="outline">
                          <Hotel className="h-4 w-4 mr-2" />
                          Book Hotel
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle>Book Your Hotel</DialogTitle>
                          <DialogDescription>
                            Find and book accommodations in {selectedCity}
                          </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleBookHotel} className="space-y-4 mt-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Destination</label>
                            <Input value={selectedCity} readOnly />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Check-in</label>
                              <Input 
                                type="date" 
                                value={startDate ? format(startDate, "yyyy-MM-dd") : ""} 
                                required 
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Check-out</label>
                              <Input 
                                type="date" 
                                value={endDate ? format(endDate, "yyyy-MM-dd") : ""} 
                                required 
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Rooms</label>
                              <Input type="number" min="1" defaultValue="1" required />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Guests</label>
                              <Input type="number" min="1" defaultValue="2" required />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Hotel Class</label>
                            <select className="w-full p-2 border rounded-md">
                              <option>Any</option>
                              <option>3+ Stars</option>
                              <option>4+ Stars</option>
                              <option>5 Stars</option>
                            </select>
                          </div>
                          <div className="pt-4">
                            <Button type="submit" className="w-full">
                              <CreditCard className="h-4 w-4 mr-2" />
                              Book Now
                            </Button>
                          </div>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              )}
            </div>
            
            <div className="lg:col-span-2">
              {selectedCity ? (
                <Tabs defaultValue="attractions">
                  <TabsList className="mb-4">
                    <TabsTrigger value="attractions">Attractions</TabsTrigger>
                    <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="attractions" className="space-y-6">
                    <h2 className="text-xl font-semibold">Attractions in {selectedCity}</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {attractions.map(attraction => {
                        const isSelected = selectedAttractions.some(a => a.id === attraction.id);
                        const selectedDay = selectedAttractions.find(a => a.id === attraction.id)?.day;
                        
                        return (
                          <Card key={attraction.id} className={cn(
                            "overflow-hidden transition-all",
                            isSelected ? "border-primary" : ""
                          )}>
                            <div className="h-40 overflow-hidden">
                              <img 
                                src={attraction.image} 
                                alt={attraction.name}
                                className="w-full h-full object-cover transition-transform hover:scale-105"
                              />
                            </div>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg">{attraction.name}</CardTitle>
                              <CardDescription>{attraction.category} • {attraction.duration}h</CardDescription>
                            </CardHeader>
                            <CardContent className="pb-2">
                              <p className="text-sm line-clamp-2">{attraction.description}</p>
                              <div className="mt-2 flex items-center">
                                <span className="text-sm font-medium">Rating: {attraction.rating}/5</span>
                              </div>
                            </CardContent>
                            <CardFooter className="pt-2">
                              {isSelected ? (
                                <div className="w-full flex justify-between">
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => handleRemoveAttraction(attraction.id)}
                                  >
                                    Remove
                                  </Button>
                                  <span className="text-sm text-primary font-medium">
                                    Added to Day {selectedDay}
                                  </span>
                                </div>
                              ) : (
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <Button className="w-full">
                                      <Plus className="h-4 w-4 mr-2" />
                                      Add to Itinerary
                                    </Button>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-48">
                                    <div className="space-y-2">
                                      <p className="text-sm font-medium">Select day:</p>
                                      <div className="grid grid-cols-3 gap-2">
                                        {tripDays.map(day => (
                                          <Button 
                                            key={day} 
                                            variant="outline" 
                                            size="sm"
                                            onClick={() => handleAddAttraction(attraction, day)}
                                          >
                                            Day {day}
                                          </Button>
                                        ))}
                                      </div>
                                    </div>
                                  </PopoverContent>
                                </Popover>
                              )}
                            </CardFooter>
                          </Card>
                        );
                      })}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="itinerary">
                    <h2 className="text-xl font-semibold mb-4">Your Itinerary</h2>
                    
                    {tripDays.map(day => {
                      const dayAttractions = selectedAttractions.filter(a => a.day === day);
                      
                      return (
                        <Card key={day} className="mb-4">
                          <CardHeader className="pb-2">
                            <CardTitle className="flex items-center">
                              <List className="h-5 w-5 mr-2" />
                              Day {day}
                              {startDate && (
                                <span className="ml-2 text-sm font-normal text-muted-foreground">
                                  {format(new Date(startDate.getTime() + (day - 1) * 24 * 60 * 60 * 1000), "EEEE, MMMM d")}
                                </span>
                              )}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            {dayAttractions.length > 0 ? (
                              <div className="space-y-3">
                                {dayAttractions.map((attraction, index) => (
                                  <div key={attraction.id} className="flex items-start p-2 border rounded hover:bg-muted/50">
                                    <div className="flex-shrink-0 w-12 h-12 rounded overflow-hidden mr-3">
                                      <img 
                                        src={attraction.image} 
                                        alt={attraction.name}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex justify-between">
                                        <h4 className="font-medium">{attraction.name}</h4>
                                        <span className="text-sm text-muted-foreground">
                                          {attraction.duration}h
                                        </span>
                                      </div>
                                      <p className="text-xs text-muted-foreground">
                                        {attraction.openingHours.open} - {attraction.openingHours.close}
                                      </p>
                                    </div>
                                    <Button 
                                      variant="ghost" 
                                      size="sm" 
                                      className="ml-2"
                                      onClick={() => handleRemoveAttraction(attraction.id)}
                                    >
                                      Remove
                                    </Button>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="text-center py-6 text-muted-foreground">
                                <p>No attractions added for this day</p>
                                <p className="text-sm mt-1">Go to the Attractions tab to add some</p>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      );
                    })}
                  </TabsContent>
                </Tabs>
              ) : (
                <div className="text-center py-16 bg-muted rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Select a destination</h3>
                  <p className="text-muted-foreground mb-4">Choose a city to see available attractions</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PlanTrip;
