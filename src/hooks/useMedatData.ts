import { useEffect, useState } from 'react'; 

interface Metadata {
  title: string;
  description: string;
}

const defaultMetadata: Metadata = {
  title: 'Switchive',
  description: 'Make mobile top-ups, buy gift cards and pay bills with crypto for more than 14,000 products worldwide in over 170 countries and earn points.',
};

const useMetadata = (initialMetadata: Metadata = defaultMetadata) => {
  const [metadata, setMetadata] = useState<Metadata>(initialMetadata);

  // useEffect(() => {
  //   // Update the document head with the current metadata
  //   const { title, description } = metadata;
  //   document.title = title;
  //   const metaDescription = document.querySelector('meta[name="description"]');
  //   if (metaDescription) {
  //     metaDescription.setAttribute('content', description);
  //   }
  // }, [metadata]);

  const updateMetadata = (newMetadata: Partial<Metadata>) => {
    setMetadata((prevMetadata) => ({
      ...prevMetadata,
      ...newMetadata,
    }));
  };

  return {
    metadata,
    updateMetadata,
  };
};

export default useMetadata;
