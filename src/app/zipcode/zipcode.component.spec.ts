import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipCodeComponent } from './zipcode.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ZipCodeService } from './zipcode.service';

describe('ZipCodeComponent', () => {
  let component: ZipCodeComponent;
  let fixture: ComponentFixture<ZipCodeComponent>;
  let zipCodeService:ZipCodeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, FormsModule ],
      declarations: [ ZipCodeComponent ],
      providers: [ZipCodeService]
    })
    .compileComponents();

    zipCodeService = TestBed.get(ZipCodeService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('component should create', () => {
    expect(component).toBeTruthy();
  });

  it('Zip code Service should create', () => {
    expect(zipCodeService).toBeTruthy();
  });

  it('Zip Code Data should be blank', () => {
    expect(component.zipCodeData).toEqual('');
  });

  it('Result should be undefined', () => {
    expect(component.zipCodeResult).toBeUndefined();
  });

  it('Clear Form method should be executed successfully', () => {
    expect(component.clearForm()).toEqual(undefined);
  });

  it('Zip Code Result should be blank', () => {
    expect(component.zipCodeResult).toEqual(undefined);
  });

  it('Zip code Input as "" and expected value should be ""', () => {
    component.zipCodeData = '';
    component.validateZipCodes();
    expect(component.zipCodeData).toEqual('');
  });

  it('Zip code Input as "" and expected Result should be undefined', () => {
    component.zipCodeData = '';
    component.validateZipCodes();
    expect(component.zipCodeResult).toEqual(undefined);
  });
  
  it('Input as "[9,8]" and expected Result should be "[9,8]"', () => {
    component.zipCodeData = '[9,8]';
    component.validateZipCodes();
    expect(component.zipCodeResult).toEqual('[9,8]');
  });

  it('Input as "[7,8][1,2]" and expected Result should be "[1,2][7,8]"', () => {
    component.zipCodeData = '[7,8][1,2]';
    component.validateZipCodes();
    expect(component.zipCodeResult).toEqual('[1,2][7,8]');
  });

  it('Input as "[94133,94133] [94200,94299] [94600,94699]" and expected Result should be " [94133,94133] [94200,94299] [94600,94699]"', () => {
    component.zipCodeData = '[94133,94133] [94200,94299] [94600,94699]';
    component.validateZipCodes();
    expect(component.zipCodeResult).toEqual('[94133,94133][94200,94299][94600,94699]');
  });

  it('Input as "[94133,94133] [94200,94299] [94226,94399]" and expected Result should be "[94133,94133] [94200,94399]"', () => {
    component.zipCodeData = '[94133,94133] [94200,94299] [94226,94399]';
    component.validateZipCodes();
    expect(component.zipCodeResult).toEqual('[94133,94133][94200,94399]');
  });

  it('Input as "[94133,94134] [94200,94299] [94226,94399]" and expected Result should be "[94133,94133] [94200,94399]"', () => {
    component.zipCodeData = '[94133,94134] [94200,94299] [94226,94399]';
    component.validateZipCodes();
    expect(component.zipCodeResult).toEqual('[94133,94134][94200,94399]');
  });

  it('Input as "[122,123] [201,288] [226, 499]" and expected Result should be "[122,123] [201,499]"', () => {
    component.zipCodeData = '[122,123] [201,288] [226, 499]';
    component.validateZipCodes();
    expect(component.zipCodeResult).toEqual('[122,123][201,499]');
  });
  
  it('Input as "[9,8][7,8][1,2]" and expected Result should be "[1,2][7,8][9,8]"', () => {
    component.zipCodeData = '[9,8][7,8][1,2]';
    component.validateZipCodes();
    expect(component.zipCodeResult).toEqual('[1,2][7,8][9,8]');
  });
});
