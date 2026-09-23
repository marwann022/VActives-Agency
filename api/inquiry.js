import { createInquiryHandler } from '../server/inquiry.js'

export const config = { maxDuration: 60 }
export default createInquiryHandler()
