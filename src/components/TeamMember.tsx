
import { Card } from "@/components/ui/card";

const TeamMember = () => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <img 
        src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
        alt="Team Member"
        className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold mb-2 text-center">Dr. John Smith</h3>
      <p className="text-gray-600 text-center">
        Chief Security Officer & AI Ethics Consultant
      </p>
    </Card>
  );
};

export default TeamMember;
