import { Package } from 'lucide-react';

interface Props {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const PackageHeader = ({ title, description, icon }: Props): JSX.Element => {
  return (
    <div className="relative my-4">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300"></div>
      </div>

      <div className="relative flex justify-center">
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 px-8 py-4 rounded-xl border border-orange-200 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="hidden md:inline">
              {icon || <Package className="w-7 h-7 text-orange-600" />}
            </span>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Пакет услуг:{' '}
                <span className="text-orange-700">&quot;{title}&quot;</span>
              </h3>
              <p className="text-lg text-gray-600 mt-1">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageHeader;
