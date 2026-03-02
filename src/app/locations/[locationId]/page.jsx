import LocationDetail from '../../../components/LocationDetail';
import { locationsData } from '../../../data/locationsData';

export function generateStaticParams() {
    return locationsData.map((location) => ({
        locationId: location.id,
    }));
}

export default function Page() {
    return <LocationDetail />;
}
