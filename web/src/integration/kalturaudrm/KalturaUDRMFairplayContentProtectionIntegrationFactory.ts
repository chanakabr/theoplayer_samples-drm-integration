import {
    ContentProtectionIntegration,
    ContentProtectionIntegrationFactory,
} from 'THEOplayer';
import { KalturaUDRMConfiguration } from './KalturaUDRMConfiguration';
import { KalturaUDRMFairplayContentProtectionIntegration } from './KalturaUDRMFairplayContentProtectionIntegration';

export class KalturaUDRMFairplayContentProtectionIntegrationFactory implements ContentProtectionIntegrationFactory {
    build(configuration: KalturaUDRMConfiguration): ContentProtectionIntegration {
        console.log("DEBUG on FACTORY"); //DEBUG
        return new KalturaUDRMFairplayContentProtectionIntegration(configuration);
    }
}