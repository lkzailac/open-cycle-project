from app.models import db, Product

def seed_products():
    p1 = Product(
        name = "Air Jordan",
        company_id = 2,
        photo_url = "https://res.cloudinary.com/dbu0tmeuc/image/upload/v1623192875/openCycleProject/air-jordan_c8wccz.jpg",
        product_category = "Sneaker",
        manufacturing_process_id = 2,
        product_weight_g = 50.5,
        unit = "pair",
        factory_id = 3,
        package_weight_g = 72.5,
        transport_mode_id = 1,
        number_of_cycles = 2,
        returnable = False,
        product_returned_percent = 0,
        product_recycled_percent = 0,
        carbon_footprint_kg = 0,
    )

    p2 = Product(
        name = "Air Zoom",
        company_id = 2,
        photo_url = "https://res.cloudinary.com/dbu0tmeuc/image/upload/v1623193262/openCycleProject/air-zoom_knryst.jpg",
        product_category = "Sneaker",
        manufacturing_process_id = 2,
        product_weight_g = 40.5,
        unit = "pair",
        factory_id = 1,
        package_weight_g = 62.5,
        transport_mode_id = 2,
        number_of_cycles = 3,
        returnable = False,
        product_returned_percent = 0,
        product_recycled_percent = 0,
        carbon_footprint_kg = 0,
    )

    p3 = Product(
        name = "Blazer Low",
        company_id = 2,
        photo_url = "https://res.cloudinary.com/dbu0tmeuc/image/upload/v1623193398/openCycleProject/blazer-low-77-vintage-mens-shoe-kw53J0_hpytzp.jpg",
        product_category = "Sneaker",
        manufacturing_process_id = 2,
        product_weight_g = 47.5,
        unit = "pair",
        factory_id = 2,
        package_weight_g = 82.5,
        transport_mode_id = 2,
        number_of_cycles = 3,
        returnable = False,
        product_returned_percent = 0,
        product_recycled_percent = 0,
        carbon_footprint_kg = 0,
    )

    p4 = Product(
        name = "Waffle Racer",
        company_id = 2,
        photo_url = "https://res.cloudinary.com/dbu0tmeuc/image/upload/v1623193398/openCycleProject/waffle-racer-crater-womens-shoe-5cbMJ0_hv1imh.jpg",
        product_category = "Sneaker",
        manufacturing_process_id = 2,
        product_weight_g = 37.5,
        unit = "pair",
        factory_id = 2,
        package_weight_g = 42.5,
        transport_mode_id = 2,
        number_of_cycles = 3,
        returnable = False,
        product_returned_percent = 0,
        product_recycled_percent = 0,
        carbon_footprint_kg = 0,
    )

    p5 = Product(
        name = "Lili Dress",
        company_id = 1,
        photo_url = "https://res.cloudinary.com/dbu0tmeuc/image/upload/v1623193608/openCycleProject/original_nt4zmg.jpg",
        product_category = "Dress",
        manufacturing_process_id = 1,
        product_weight_g = 7.5,
        unit = "one",
        factory_id = 4,
        package_weight_g = 12.5,
        transport_mode_id = 3,
        number_of_cycles = 50,
        returnable = True,
        product_returned_percent = 5,
        product_recycled_percent = 40,
        carbon_footprint_kg = 0,
    )

    p6 = Product(
        name = "Cynthia High Rise",
        company_id = 1,
        photo_url = "https://res.cloudinary.com/dbu0tmeuc/image/upload/v1623193843/openCycleProject/original_1_jfhjye.jpg",
        product_category = "Denim",
        manufacturing_process_id = 1,
        product_weight_g = 12.5,
        unit = "one",
        factory_id = 4,
        package_weight_g = 15.5,
        transport_mode_id = 3,
        number_of_cycles = 100,
        returnable = True,
        product_returned_percent = 5,
        product_recycled_percent = 40,
        carbon_footprint_kg = 0,
    )

    p7 = Product(
        name = "Mako Shorts",
        company_id = 1,
        photo_url = "https://res.cloudinary.com/dbu0tmeuc/image/upload/v1623195710/openCycleProject/mako_shorts_yovgp2.jpg",
        product_category = "Men's Shorts",
        manufacturing_process_id = 1,
        product_weight_g = 7.5,
        unit = "one",
        factory_id = 4,
        package_weight_g = 12.5,
        transport_mode_id = 3,
        number_of_cycles = 120,
        returnable = True,
        product_returned_percent = 20,
        product_recycled_percent = 20,
        carbon_footprint_kg = 0,
    )

    p8 = Product(
        name = "Commuter Shirt",
        company_id = 1,
        photo_url = "https://res.cloudinary.com/dbu0tmeuc/image/upload/v1623195710/openCycleProject/commuter_shirt_xhoctu.jpg",
        product_category = "Men's Dress Shirt",
        manufacturing_process_id = 1,
        product_weight_g = 8.5,
        unit = "one",
        factory_id = 4,
        package_weight_g = 13.5,
        transport_mode_id = 3,
        number_of_cycles = 80,
        returnable = True,
        product_returned_percent = 10,
        product_recycled_percent = 14,
        carbon_footprint_kg = 0,
    )

    p9 = Product(
        name = "Sara Dress",
        company_id = 3,
        photo_url = "https://res.cloudinary.com/dbu0tmeuc/image/upload/v1623196146/openCycleProject/sara_pfonwq.webp",
        product_category = "Dress",
        manufacturing_process_id = 1,
        product_weight_g = 10.5,
        unit = "one",
        factory_id = 5,
        package_weight_g = 13.5,
        transport_mode_id = 2,
        number_of_cycles = 200,
        returnable = False,
        product_returned_percent = 0,
        product_recycled_percent = 0,
        carbon_footprint_kg = 0,
    )

    p10 = Product(
        name = "Washed T",
        company_id = 3,
        photo_url = "https://res.cloudinary.com/dbu0tmeuc/image/upload/v1623196365/openCycleProject/washed_t_bqznp0.webp",
        product_category = "T-shirt",
        manufacturing_process_id = 1,
        product_weight_g = 8.2,
        unit = "one",
        factory_id = 5,
        package_weight_g = 17.5,
        transport_mode_id = 2,
        number_of_cycles = 350,
        returnable = False,
        product_returned_percent = 0,
        product_recycled_percent = 0,
        carbon_footprint_kg = 0,
    )

    p11 = Product(
        name = "Circle Scarf",
        company_id = 3,
        photo_url = "https://res.cloudinary.com/dbu0tmeuc/image/upload/v1623196687/openCycleProject/scarf_vzpcwe.webp",
        product_category = "T-shirt",
        manufacturing_process_id = 1,
        product_weight_g = 10.6,
        unit = "one",
        factory_id = 5,
        package_weight_g = 18.7,
        transport_mode_id = 2,
        number_of_cycles = 8,
        returnable = False,
        product_returned_percent = 0,
        product_recycled_percent = 0,
        carbon_footprint_kg = 0,
    )

    p12 = Product(
        name = "Cocotte",
        company_id = 4,
        photo_url = "https://res.cloudinary.com/dbu0tmeuc/image/upload/v1623196946/openCycleProject/staub-5.5-qt-graphite-grey-cocotte_z6vlwp.jpg",
        product_category = "cookware",
        manufacturing_process_id = 3,
        product_weight_g = 40.6,
        unit = "one",
        factory_id = 3,
        package_weight_g = 50.7,
        transport_mode_id = 2,
        number_of_cycles = 500,
        returnable = False,
        product_returned_percent = 0,
        product_recycled_percent = 0,
        carbon_footprint_kg = 0,
    )

    p13 = Product(
        name = "Oval Bakers",
        company_id = 4,
        photo_url = "https://res.cloudinary.com/dbu0tmeuc/image/upload/v1623196946/openCycleProject/staub1_trclm2.jpg",
        product_category = "cookware",
        manufacturing_process_id = 3,
        product_weight_g = 30.6,
        unit = "one",
        factory_id = 3,
        package_weight_g = 50.7,
        transport_mode_id = 2,
        number_of_cycles = 500,
        returnable = False,
        product_returned_percent = 0,
        product_recycled_percent = 0,
        carbon_footprint_kg = 0,
    )

    p14 = Product(
        name = "Rustic Ceramic",
        company_id = 4,
        photo_url = "https://res.cloudinary.com/dbu0tmeuc/image/upload/v1623196947/openCycleProject/staub2_f9hcpv.jpg",
        product_category = "cookware",
        manufacturing_process_id = 3,
        product_weight_g = 30.6,
        unit = "one",
        factory_id = 3,
        package_weight_g = 50.7,
        transport_mode_id = 2,
        number_of_cycles = 500,
        returnable = False,
        product_returned_percent = 0,
        product_recycled_percent = 0,
        carbon_footprint_kg = 0,
    )

    db.session.add(p1)
    db.session.add(p2)
    db.session.add(p3)
    db.session.add(p4)
    db.session.add(p5)
    db.session.add(p6)
    db.session.add(p7)
    db.session.add(p8)
    db.session.add(p9)
    db.session.add(p10)
    db.session.add(p11)
    db.session.add(p12)
    db.session.add(p13)
    db.session.add(p14)

    db.session.commit()


def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
