import Image from 'next/image';

type AppStoreLinksProps = {
  appName: string;
  appStoreUrl: string;
  googlePlayUrl: string;
};

export default function AppStoreLinks({ appName, appStoreUrl, googlePlayUrl }: AppStoreLinksProps) {
  return (
    <div className="ss-store-badges">
      <a className="ss-store-badge ss-store-badge-apple" href={appStoreUrl} target="_blank" rel="noopener noreferrer" aria-label={`Download ${appName} from the App Store (opens in a new tab)`}>
        <Image src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="Download on the App Store" width={120} height={40} />
      </a>
      <a className="ss-store-badge ss-store-badge-google" href={googlePlayUrl} target="_blank" rel="noopener noreferrer" aria-label={`Download ${appName} from Google Play (opens in a new tab)`}>
        <Image src="/badges/google-play.png" alt="Get it on Google Play" width={646} height={250} />
      </a>
    </div>
  );
}
