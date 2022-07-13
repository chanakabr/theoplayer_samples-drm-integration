import { DRMConfiguration } from "THEOplayer";

/**
 * The identifier of the KalturaUDRM integration.
 */
export type KalturaUDRMIntegrationID = 'kalturaudrm';

/**
 * Describes the configuration of the KalturaUDRM DRM integration.
 *
 * ```
 * const drmConfiguration = {
 *      integration : 'kalturaudrm',
 *      fairplay: {
 *          certificateURL: 'kaltura certificate url',
 *          licenseAcquisitionURL: 'kaltura udrm license url'
 *      }
 * }
 * ```
 */
export interface KalturaUDRMConfiguration extends DRMConfiguration {

    /**
     * The identifier of the DRM integration.
     */
    integration: KalturaUDRMIntegrationID;
}
