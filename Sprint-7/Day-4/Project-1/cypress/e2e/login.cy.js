describe("Login page tests", () => {
    // Arrange
    beforeEach(() => {
        cy.visit("/");
    });

    it("Form submit success if inputs are valid", () => {
        // Act
        cy.get("[data-cy=email]").type("erdem.guntay@wit.com.tr");
        cy.get("[data-cy=password]").type("12345678");
        cy.get("[data-cy=terms]").check();
        cy.get("[data-cy=submit]").click();

        // Assert
        cy.url().should("include", "/success");
    });

    it("Button disabled and error messages shown if inputs are invalid", () => {
        /* 
        email yanlış girdim:
        ekranda 1 tane hata mesajı var
        ekranda doğru hata mesajı var
        buton disabled durumda

        email ve password yanlış girdim:
        ekranda 2 tane hata mesajı var
        ekranda password hata mesajı var

        email ve password doğru ama kuralları kabul etmedim:
        buton disabled mı
        */

        // Act
        cy.get("[data-cy=email]").type("erdem.guntay");

        // Assert
        cy.get("[data-cy=email]").should("have.class", "is-invalid");
        cy.get("[data-cy=email] ~ .invalid-feedback").contains(
            "Email must be a valid email address"
        );
        cy.get("[data-cy=submit]").should("be.disabled");

        // Act
        cy.get("[data-cy=password]").type("123");

        // Assert
        cy.get("[data-cy=password]").should("have.class", "is-invalid");
        cy.get("[data-cy=password] ~ .invalid-feedback").contains(
            "Password must be at least 8 characters"
        );
        cy.get("[data-cy=submit]").should("be.disabled");

        // Act
        cy.get("[data-cy=email]").clear();
        cy.get("[data-cy=email]").type("erdem.guntay@wit.com.tr");
        cy.get("[data-cy=password]").clear();
        cy.get("[data-cy=password]").type("12345678");
        cy.get("[data-cy=terms]").uncheck();

        // Assert
        cy.get("[data-cy=submit]").should("be.disabled");
    });
});
