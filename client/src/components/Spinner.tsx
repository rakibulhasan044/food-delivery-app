import { Loader } from 'lucide-react';

const Spinner = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-bg-lightGreen to-purple-950 flex items-center justify-center relative overflow-hidden">
      <Loader className="animate-spin w-16 h-16 text-white" />
    </div>
    );
};

export default Spinner;