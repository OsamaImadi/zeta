import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ProjectController } from "../project.controller";
import { ProjectService } from "../project.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  appInstalled: "true",
  appName: "exampleAppName",
  appPassword: "exampleAppPassword",
  appUsername: "exampleAppUsername",
  clientAddress: "exampleClientAddress",
  clientCnic: "exampleClientCnic",
  clientContactNumber: "exampleClientContactNumber",
  clientName: "exampleClientName",
  completionDate: new Date(),
  createdAt: new Date(),
  greenMeterInstalled: "true",
  id: "exampleId",
  installationTeamContactNumber: "exampleInstallationTeamContactNumber",
  installationTeamName: "exampleInstallationTeamName",
  inverterCapacity: "exampleInverterCapacity",
  inverterCompany: "exampleInverterCompany",
  inverterSerialNumber: "exampleInverterSerialNumber",
  inverterSupplierDetails: "exampleInverterSupplierDetails",
  invoiceOfPanelPurchase: "exampleInvoiceOfPanelPurchase",
  netMeteringLicense: "exampleNetMeteringLicense",
  netMeteringLicenseCopyAvailable: "true",
  numberOfPanels: "exampleNumberOfPanels",
  panelsCompany: "examplePanelsCompany",
  profit: "exampleProfit",
  projectSize: "exampleProjectSize",
  startDate: new Date(),
  structureType: "exampleStructureType",
  totalQuotationAgreed: "exampleTotalQuotationAgreed",
  updatedAt: new Date(),
  wifiDongleSerialNumber: "exampleWifiDongleSerialNumber",
};
const CREATE_RESULT = {
  appInstalled: "true",
  appName: "exampleAppName",
  appPassword: "exampleAppPassword",
  appUsername: "exampleAppUsername",
  clientAddress: "exampleClientAddress",
  clientCnic: "exampleClientCnic",
  clientContactNumber: "exampleClientContactNumber",
  clientName: "exampleClientName",
  completionDate: new Date(),
  createdAt: new Date(),
  greenMeterInstalled: "true",
  id: "exampleId",
  installationTeamContactNumber: "exampleInstallationTeamContactNumber",
  installationTeamName: "exampleInstallationTeamName",
  inverterCapacity: "exampleInverterCapacity",
  inverterCompany: "exampleInverterCompany",
  inverterSerialNumber: "exampleInverterSerialNumber",
  inverterSupplierDetails: "exampleInverterSupplierDetails",
  invoiceOfPanelPurchase: "exampleInvoiceOfPanelPurchase",
  netMeteringLicense: "exampleNetMeteringLicense",
  netMeteringLicenseCopyAvailable: "true",
  numberOfPanels: "exampleNumberOfPanels",
  panelsCompany: "examplePanelsCompany",
  profit: "exampleProfit",
  projectSize: "exampleProjectSize",
  startDate: new Date(),
  structureType: "exampleStructureType",
  totalQuotationAgreed: "exampleTotalQuotationAgreed",
  updatedAt: new Date(),
  wifiDongleSerialNumber: "exampleWifiDongleSerialNumber",
};
const FIND_MANY_RESULT = [
  {
    appInstalled: "true",
    appName: "exampleAppName",
    appPassword: "exampleAppPassword",
    appUsername: "exampleAppUsername",
    clientAddress: "exampleClientAddress",
    clientCnic: "exampleClientCnic",
    clientContactNumber: "exampleClientContactNumber",
    clientName: "exampleClientName",
    completionDate: new Date(),
    createdAt: new Date(),
    greenMeterInstalled: "true",
    id: "exampleId",
    installationTeamContactNumber: "exampleInstallationTeamContactNumber",
    installationTeamName: "exampleInstallationTeamName",
    inverterCapacity: "exampleInverterCapacity",
    inverterCompany: "exampleInverterCompany",
    inverterSerialNumber: "exampleInverterSerialNumber",
    inverterSupplierDetails: "exampleInverterSupplierDetails",
    invoiceOfPanelPurchase: "exampleInvoiceOfPanelPurchase",
    netMeteringLicense: "exampleNetMeteringLicense",
    netMeteringLicenseCopyAvailable: "true",
    numberOfPanels: "exampleNumberOfPanels",
    panelsCompany: "examplePanelsCompany",
    profit: "exampleProfit",
    projectSize: "exampleProjectSize",
    startDate: new Date(),
    structureType: "exampleStructureType",
    totalQuotationAgreed: "exampleTotalQuotationAgreed",
    updatedAt: new Date(),
    wifiDongleSerialNumber: "exampleWifiDongleSerialNumber",
  },
];
const FIND_ONE_RESULT = {
  appInstalled: "true",
  appName: "exampleAppName",
  appPassword: "exampleAppPassword",
  appUsername: "exampleAppUsername",
  clientAddress: "exampleClientAddress",
  clientCnic: "exampleClientCnic",
  clientContactNumber: "exampleClientContactNumber",
  clientName: "exampleClientName",
  completionDate: new Date(),
  createdAt: new Date(),
  greenMeterInstalled: "true",
  id: "exampleId",
  installationTeamContactNumber: "exampleInstallationTeamContactNumber",
  installationTeamName: "exampleInstallationTeamName",
  inverterCapacity: "exampleInverterCapacity",
  inverterCompany: "exampleInverterCompany",
  inverterSerialNumber: "exampleInverterSerialNumber",
  inverterSupplierDetails: "exampleInverterSupplierDetails",
  invoiceOfPanelPurchase: "exampleInvoiceOfPanelPurchase",
  netMeteringLicense: "exampleNetMeteringLicense",
  netMeteringLicenseCopyAvailable: "true",
  numberOfPanels: "exampleNumberOfPanels",
  panelsCompany: "examplePanelsCompany",
  profit: "exampleProfit",
  projectSize: "exampleProjectSize",
  startDate: new Date(),
  structureType: "exampleStructureType",
  totalQuotationAgreed: "exampleTotalQuotationAgreed",
  updatedAt: new Date(),
  wifiDongleSerialNumber: "exampleWifiDongleSerialNumber",
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Project", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ProjectService,
          useValue: service,
        },
      ],
      controllers: [ProjectController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /projects", async () => {
    await request(app.getHttpServer())
      .post("/projects")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        completionDate: CREATE_RESULT.completionDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /projects", async () => {
    await request(app.getHttpServer())
      .get("/projects")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          completionDate: FIND_MANY_RESULT[0].completionDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          startDate: FIND_MANY_RESULT[0].startDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /projects/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/projects"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /projects/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/projects"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        completionDate: FIND_ONE_RESULT.completionDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        startDate: FIND_ONE_RESULT.startDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /projects existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/projects")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        completionDate: CREATE_RESULT.completionDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/projects")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
