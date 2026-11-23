
import { Printer } from 'lucide-react';

const PrintButton: React.FC = () => {
  const handlePDF = () => {
    window.open('/Amarnath_resume.pdf', '_blank');
  };

  return (
    <button
      onClick={handlePDF}
      className="btn-secondary no-print flex items-center gap-2"
      aria-label="View and print portfolio PDF"
    >
      <Printer className="h-4 w-4" />
      <span>Download PDF</span>
    </button>
  );
};

export default PrintButton;
