
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { Calendar, Plus, MapPin, Users, User } from 'lucide-react';
import { toast } from 'sonner';

// Mock trip data (in a real app this would come from a database)
const mockTrips = [
  {
    id: "1",
    name: "Paris Adventure",
    destination: "Paris, France",
    startDate: "2025-06-10",
    endDate: "2025-06-17",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop",
    attractions: 5
  },
  {
    id: "2",
    name: "NYC Weekend",
    destination: "New York, USA",
    startDate: "2025-07-15",
    endDate: "2025-07-18",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop",
    attractions: 3
  }
];

const Trips: React.FC = () => {
  const [trips, setTrips] = useState(mockTrips);
  const [friendUsername, setFriendUsername] = useState('');
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };
  
  const calculateDuration = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return diffDays;
  };
  
  const handleAddFriend = () => {
    if (friendUsername.trim()) {
      // In a real app, this would search for a user and send a friend request
      toast.success(`Friend request sent to ${friendUsername}!`);
      setFriendUsername('');
    } else {
      toast.error("Please enter a username");
    }
  };
  
  return (
    <Layout>
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Your Trips</h1>
              <p className="text-lg text-gray-600">
                Manage your planned trips and explore with friends
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex space-x-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Users className="h-4 w-4 mr-2" />
                    Add Friend
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add a Friend</DialogTitle>
                    <DialogDescription>
                      Enter your friend's username to send them a friend request.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <Input
                      placeholder="Username"
                      value={friendUsername}
                      onChange={(e) => setFriendUsername(e.target.value)}
                    />
                  </div>
                  <DialogFooter>
                    <Button onClick={handleAddFriend}>
                      Send Friend Request
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              
              <Link to="/plan">
                <Button variant="default">
                  <Plus className="h-4 w-4 mr-2" />
                  New Trip
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trips.map(trip => (
              <Card key={trip.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={trip.image} 
                    alt={trip.destination}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>{trip.name}</CardTitle>
                  <CardDescription className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {trip.destination}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>
                        {formatDate(trip.startDate)} — {formatDate(trip.endDate)}
                      </span>
                    </div>
                    <span className="font-medium">
                      {calculateDuration(trip.startDate, trip.endDate)} days
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {trip.attractions} attractions planned
                  </div>
                </CardContent>
                <CardFooter className="pt-2 flex justify-between">
                  <Button variant="outline" size="sm">
                    <Users className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Link to={`/plan?edit=${trip.id}`}>
                    <Button size="sm">View Details</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
            
            {trips.length === 0 && (
              <div className="col-span-full text-center py-16 bg-muted rounded-lg">
                <h3 className="text-xl font-medium mb-2">No trips planned yet</h3>
                <p className="text-muted-foreground mb-4">Start planning your next adventure</p>
                <Link to="/plan">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Your First Trip
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Trips;
