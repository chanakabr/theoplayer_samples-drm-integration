import {
    ContentProtectionIntegration,
    CertificateRequest,
    MaybeAsync,
    BufferSource,
    CertificateResponse,
    LicenseRequest,
    LicenseResponse
} from 'THEOplayer';
import { KalturaUDRMConfiguration } from './KalturaUDRMConfiguration';
import { fromUint8ArrayToString, fromBase64StringToUint8Array, fromStringToUint8Array, fromUint8ArrayToBase64String } from "../../utils/TypeUtils";

export class KalturaUDRMFairplayContentProtectionIntegration implements ContentProtectionIntegration {
    constructor(private readonly contentProtectionConfiguration: KalturaUDRMConfiguration) {
    }
    
    // Request rewrite
    onLicenseRequest(request: LicenseRequest): MaybeAsync<Partial<LicenseRequest> | BufferSource> {
        request.headers['content-type'] = 'application/json';
        const licenseParameters = fromUint8ArrayToBase64String(request.body!);
        request.body = fromStringToUint8Array(licenseParameters);
        return request;
    }

    // Response rewrite
    onLicenseResponse(response: LicenseResponse): MaybeAsync<BufferSource> {
        const license = fromUint8ArrayToString(response.body).trim();
        const licenseObj = JSON.parse(license);
        return fromBase64StringToUint8Array(licenseObj.ckc);
    }
}