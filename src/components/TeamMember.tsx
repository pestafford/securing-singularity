
import { Card } from "@/components/ui/card";

const TeamMember = () => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-col items-center">
        <img 
          src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
          alt="Team Member"
          className="w-48 h-48 object-cover rounded-full mb-4"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d";
          }}
        />
        <h3 className="text-xl font-semibold mb-2">Dr. John Smith</h3>
        <p className="text-gray-600">
          Chief Security Officer & AI Ethics Consultant
        </p>
      </div>
    </Card>
  );
};

export default TeamMember;
