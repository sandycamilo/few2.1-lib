const phone = require('../src/index');

test('formatPhoneNumber', () => {
    expect(phone.formatPhoneNumber("2 2 2-444-909-9")).toBe("Phone: (222) 444-9099");
    expect(phone.formatPhoneNumber("1234567890")).toBe("Phone: (123) 456-7890");
    expect(phone.formatPhoneNumber("2-5-3-3-3-36-5-02")).toBe("Phone: (253) 333-6502");
    expect(phone.formatPhoneNumber("909-9999999")).toBe("Phone: (909) 999-9999");
    expect(phone.formatPhoneNumber("909-09")).toBe(null);
    expect(phone.formatPhoneNumber("((((909-0909876")).toBe("Phone: (909) 090-9876");
});
