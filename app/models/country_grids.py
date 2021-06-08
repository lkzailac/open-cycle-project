from .db import db

class Country_Grid(db.Model):
    __tablename__ = 'country_grids'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)

    factories = db.Relationship("Factory", back_populates="country_grid")


    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
        }
