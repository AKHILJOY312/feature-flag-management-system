export interface JwtPayload {
  id?: string;
  email: string;
  role: "SUPER_ADMIN" | "ORG_ADMIN";
  organizationId?: string;
}
